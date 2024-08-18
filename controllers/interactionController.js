const puppeteer = require('puppeteer');
const ScrapedData = require('../models/ScrapedData');

exports.simulateInteraction = async (req, res) => {
    const { id, actions } = req.body;
    try {
        const scrapedData = await ScrapedData.findById(id);
        if (!scrapedData) return res.status(404).send('Data not found');

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(scrapedData.url, { waitUntil: 'networkidle2' });

        for (const action of actions) {
            const elementExists = await page.$(action.selector) !== null;
            if (!elementExists) {
                return res.status(400).json({ error: `Element not found for selector: ${action.selector}` });
            }

            if (action.type === 'click') {
                await page.click(action.selector);
            } else if (action.type === 'type') {
                await page.type(action.selector, action.value);
            }
        }

        scrapedData.interactionHistory.push(actions);
        await scrapedData.save();

        await browser.close();
        res.json(scrapedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interacting with the site' });
    }
};

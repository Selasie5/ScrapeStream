const puppeteer = require('puppeteer');
const ScrapedData = require('../models/ScrapedData');

exports.scrapeSite = async (req, res) => {
    const { url } = req.body;
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        const data = await page.evaluate(() => {
            return {
                title: document.title,
                content: document.body.innerText,
            };
        });

        const scrapedData = new ScrapedData({ url, data, interactionHistory: [] });
        await scrapedData.save();

        await browser.close();
        res.json(scrapedData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error scraping the site');
    }
};

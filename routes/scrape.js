const express = require('express');
const router = express.Router();
const { scrapeSite } = require('../controllers/scrapeController');

router.post('/scrape', scrapeSite);

module.exports = router;

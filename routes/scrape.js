const express = require('express');
const router = express.Router();
const { scrapeSite } = require('../controllers/scrapeContoller');

router.post('/scrape', scrapeSite);

module.exports = router;

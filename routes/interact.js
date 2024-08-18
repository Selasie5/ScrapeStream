const express = require('express');
const router = express.Router();
const { simulateInteraction } = require('../controllers/interactController');

router.post('/interact', simulateInteraction);

module.exports = router;

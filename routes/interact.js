const express = require('express');
const router = express.Router();
const { simulateInteraction } = require('../controllers/interactionController');

router.post('/interact', simulateInteraction);

module.exports = router;

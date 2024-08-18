const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    url: String,
    data: Object,
    interactionHistory: Array,
}, { timestamps: true });

module.exports = mongoose.model('ScrapedData', DataSchema);

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const scrapeRoutes = require('./routes/scrape');
const interactRoutes = require('./routes/interact');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('combined', { stream: require('fs').createWriteStream('./logs/access.log', { flags: 'a' }) }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/', scrapeRoutes);
app.use('/', interactRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

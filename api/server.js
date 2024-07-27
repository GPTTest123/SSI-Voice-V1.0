const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api-key', (req, res) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
        res.json({ apiKey });
    } else {
        res.status(404).json({ error: 'API key not found' });
    }
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

module.exports = app;

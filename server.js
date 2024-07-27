const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config(); // Load environment variables from .env file

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api-key', (req, res) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
        res.json({ apiKey });
    } else {
        res.status(404).json({ error: 'API key not found' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

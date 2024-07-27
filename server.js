const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'));

app.get('/api-key', (req, res) => {
  if (process.env.OPENAI_API_KEY) {
    res.json({ apiKey: process.env.OPENAI_API_KEY });
  } else {
    res.status(404).json({ error: 'API key not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

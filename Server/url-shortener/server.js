const express = require('express');
const shortid = require('shortid');
const app = express();
const port = 3000;

// Simple in-memory storage for URL mappings
const urlDatabase = {};

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to shorten a URL
app.post('/api/shorten', (req, res) => {
  const { originalUrl } = req.body;
  const shortId = shortid.generate(); // Generate a unique short ID
  urlDatabase[shortId] = originalUrl;
  res.json({ shortUrl: `http://localhost:${port}/${shortId}` });
});

// Endpoint to handle URL redirection
app.get('/:shortId', (req, res) => {
  const shortId = req.params.shortId;
  const originalUrl = urlDatabase[shortId];
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ message: 'URL not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

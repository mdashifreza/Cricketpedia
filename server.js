const express = require('express');
const crypto = require('crypto');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3015;
// Generate a hash for the given URL and salt
function generateHash(url, salt) {
    const saltedUrl = salt + url;
    const hash = crypto.createHash('sha256');
    hash.update(saltedUrl);
    return hash.digest('hex');
}
// Middleware to handle hashed URLs
function handleHashedUrl(req, res, next) {
    const { hash } = req.params;
    // Check if hash is valid and decrement usage counter
    // If usage limit reached, invalidate hash and redirect to original URL
    // Otherwise, continue to the next middleware to track the click
    console.log(`Handling hashed URL ${hash}`);
    next();
}

// Middleware to track URL clicks and redirect to original URL
function trackUrlClick(req, res, next) {
    const { hash } = req.params;
    // Increment click count for the given hash and redirect to original URL
    console.log(`Tracking URL click for ${hash}`);
    res.redirect('https://google.com');
}

// Endpoint to generate hashed URLs
app.get('/hash/:salt(*)', (req, res) => {
    const { salt } = req.params;
    const { url } = req.query;
    const hashedUrl = generateHash(url, salt);
    console.log(`Generated hashed URL ${hashedUrl} for ${url} with salt ${salt}`);
    res.send(`https://google.com/click/${hashedUrl}`);
});

// Endpoint to handle hashed URLs
app.get('/click/:hash(*)', handleHashedUrl, trackUrlClick);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

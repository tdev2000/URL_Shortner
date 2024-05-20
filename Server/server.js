const express = require('express');
const app = express();
const path = require('path');
var shortUrl = require("node-url-shortener");

const PORT = 3001;

// dummy get request
// API call - http://localhost:3001/
app.get('/', (req, res) => {
    console.log("api call recived !");
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// dummy get reques 2
// API call - http://localhost:3001/api/get-short-url
app.get('/api/get-short-url', (req, res) => {
    const longURL = req.query.longURL;
    
    shortUrl.short(longURL, function (err, url) {
        res.send({ staus: "success", response: url });
    });
});

app.listen(PORT, () => {
    console.log('App is running on : ' + PORT);
});
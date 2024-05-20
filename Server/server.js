const express = require('express');
const cors = require('cors');
const app = express();
// Use CORS middleware
app.use(cors());
const path = require('path');
const shortUrl = require("node-url-shortener");

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
        console.log(url);
        if (url) {
            res.send({ staus: "success", response: url });
        }
        else{
            res.send({ staus: "failed", response: err });

        }
    });
});

app.listen(PORT, () => {
    console.log('App is running on : ' + PORT);
});
const fs = require('fs');
const path = require('path');
const express = require('express');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pathSTATIC = path.resolve(__dirname, '../www');
const pathINDEX = path.resolve(pathSTATIC, './index.html');

if (!fs.existsSync(pathSTATIC)) {
    console.log("The static folder didn't find");
    process.exit(1);
}

if (!fs.existsSync(pathINDEX)) {
    console.log("The index file didn't find");
    process.exit(1);
}

app.use(express.static(pathSTATIC));

app.get('/*', (req, res) => { 
    try {
        res.sendFile(pathINDEX);
    } catch (error) {
        res.status(422).send("Page Not Found");
    }
});

module.exports = app;
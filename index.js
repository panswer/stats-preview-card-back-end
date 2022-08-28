const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

/* 
    Configuration
*/
const pathENV = path.resolve(__dirname, './.env');

if (fs.existsSync(pathENV)) {
    dotenv.config({
        path: pathENV
    });
}

const app = require('./src/app');


const port = process.env.PORT || 3001;

app.listen(port, err => err ? console.log(err) : console.log(`Server on ${port}`));
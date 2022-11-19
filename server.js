const express = require("express");
const app = express();
const port = process.argv[2] || 80;
//gives you the "process", argv is an array
//process.argv[0] = node
//process.argv[1] =  server.js
//process.argv[2] = whatever port I have specified in the terminal node server.js 8000, etc.

const www = express.static(`${__dirname}/www`);
//. means starts from this folder (avoid using, can cause issues)
//${} is how to you pass variables

app.use(www);
//localhost = "Whatever my IP address is"

app.listen(port, () => { //behaves differently from a regular function
    console.log(`Server is running on port ${port}...`)
});


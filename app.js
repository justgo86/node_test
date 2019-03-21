const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World\n')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', require('./api/users'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
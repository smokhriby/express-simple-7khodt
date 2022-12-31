// Requiring module
const express = require('express');
const bodyParser = require('body-parser');
const expAutoSan = require('express-autosanitizer');

// Creating express app object
const app = express();
const path = require('path');

var serverData = { "name": "Sue", "age": "88", "city": "Boston"}; //JSON object
var s = JSON.stringify(serverData);
console.log(s);

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
// Calling the express.json() method for parsing
app.use(express.json());

app.use(expAutoSan.all);

app.post('/check', (req, res, next) => {
  console.log('post data was received from the client');
  res.send(s); //send serverData as a string.
  console.log('serverData was sent to the client');
  //console.log(req.autosan.body);
  //res.send('This is the post request ' + req.autosan.body.fname);
  next();
});

app.get('/gfg', (req, res, next) => {
  res.send('This is the get /gfg request');
  console.log('the gfg route was called and a response sent.');
  res.end();
});

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve('posted.html'));
});

app.delete('/gfgdelete', (req, res, next) => {
  res.send('This is the delete request');
  res.end();
});

// Server setup
app.listen(3000, () => {
  console.log('Server is Running');
});
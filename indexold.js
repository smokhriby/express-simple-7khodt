const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
var x;

const bodyparser = require('body-parser');
// View Engine Setup
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.post('/', (req, res) => {
  //console.log('post request received by server');
  console.log(`Example app listening at http://localhost:${port}`);
  res.send("some response");
  //x = req.body.input;
//  console.log('Using Body-parser: ', req.body.input);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

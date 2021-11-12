const express = require('express');
const app = express();

// to get body data from POST
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.get('/abc', function (req, res) {
  res.send('Welcome to ABC World!');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/write', function (req, res) {
  res.sendFile(__dirname + '/write.html');
});

app.post('/add', function (req, res) {
  res.send('Success');
  console.log(req.body.title);
});

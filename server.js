const express = require('express');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.get('/abc', function (req, res) {
  res.send('Welcome to ABC World!');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

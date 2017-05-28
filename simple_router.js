
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  status = { 'web': 'ok', 'web_hostname': process.env.HOSTNAME };

  res.send(JSON.stringify(status, null, 3));
})

app.listen(8080, function () {
  console.log('Listening on port 8080!');
})


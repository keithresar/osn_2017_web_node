
const express = require('express');
const request = require('request');
const app = express();

hit_count = 0;

app.get('/', function (req, res) {
    hit_count += 1;
    status = { 'web': { 'status': 'ok', 'hit_count': hit_count,'hostname': process.env.HOSTNAME } };

    // Make API call if routing defined in env
    if (process.env.API_SERVICE_PORT)  {
        request.get('http://'+process.env.API_SERVICE_HOST+':'+process.env.API_SERVICE_PORT,
            function(err,r,body) {
                status['api'] = JSON.parse(body);
                res.send(JSON.stringify(status, null, 3));
            });
    }  else  {
        res.send(JSON.stringify(status, null, 3));
    }

})

app.listen(8080, function () {
  console.log('Listening on port 8080!');
})




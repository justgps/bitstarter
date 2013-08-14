var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('./index.html', function(err, data) {
     if(err) response.send("500 error: " + err);
     var buff = new Buffer(data);
     //buff.toString(
     response.send(buff.toString());
  });
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});

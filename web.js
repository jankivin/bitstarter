var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

//// var file = "index.html":

//// var textstring = fs.readFileSync(file);
//// console.log(

var data;
data = fs.readFileSync('index.html','utf8');

//console.log(data);

app.get('/', function(request, response) {
////  response.send('Hello World 2!');
    response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

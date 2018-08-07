var http = require("http");

var PORT1 = 7000;

function handleRequest(request, response) {

  response.end("You gon` be somebody someday..");
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {

  console.log("You gon` be somebody someday.." + PORT);
});

var http = require("http");

var PORT2 = 7500;

function handleRequest(request, response) {

  response.end("Yo life sucks, yo.");
}

var server = http.createServer(handleRequest);

server.listen(PORT2, function() {

  console.log("Yo life sucks, yo.");
});
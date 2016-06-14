// basic HTTP server
// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
// usage: http://localhost:7777

var http = require("http");
var PORT = 7777;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});

  var headers = request.headers;
  var httpVersion = request.httpVersion;
  var rawHeaders = request.rawHeaders;
  var method = request.method;
  var rawTrailers = request.rawTrailers;
  var statusCode = request.statusCode;
  var statusMessage = request.statusMessage;
  var socket = request.socket;
  var trailers = request.trailers;
  var url = request.url;

  response.write("headers:"+headers);
  response.write("\n\nhttpVersion:"+httpVersion);
  response.write("\n\nrawHeaders:"+rawHeaders);
  response.write("\n\nmethod:"+method);
  response.write("\n\nrawTrailers:"+rawTrailers);
  response.write("\n\nstatusCode:"+statusCode);
  response.write("\n\nstatusMessage:"+statusMessage);
  response.write("\n\nsocket:"+socket);
  response.write("\n\ntrailers:"+trailers);
  response.write("\n\nurl:"+url);

  response.end();
}).listen(PORT);

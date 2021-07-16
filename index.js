//Express server
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log("Listening on port %d", port);
});
server.on("error", function (err) {
  if (err.errno === "EADDRINUSE") {
    console.log("Port " + port + " is already in use, try a different port.");
  } else {
    throw err;
  }
});

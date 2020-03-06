var http = require("http");
var express = require("express");
var app = express();

//プレースホルダー
app.get("/users/:name?", (req, res) => {
  if (req.params.name) {
    res.send("Hello, " + req.params.name);
  } else {
    res.send("Have a nice day!");
  }
});

app.get("/items/:id[0-100]+", (req, res) => {
  res.send("item no: " + req.params.id);
});

var server = http.createServer(app);
server.listen(3003);
console.log("ok");

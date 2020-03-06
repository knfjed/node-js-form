var http = require("http");
var express = require("express");
var logger = require("morgan");
var app = express();

// middlewear
// 静的なファイル名でアクセスされたら、ここから配信
app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log("Nice to meet you!");
  next();
});

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

app.get("/hello.txt", (req, res) => {
  res.sendfile(__dirname + "/public/hello.txt");
});

var server = http.createServer(app);
server.listen(3003);
console.log("ok");

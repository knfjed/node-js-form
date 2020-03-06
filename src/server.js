var http = require("http");
var express = require("express");
var logger = require("morgan");
var app = express();

// テンプレートを読み込むための設定
// 最初にテンプレートがどこにあるのか設定（views）
// どのテンプレートエンジンを使うか指定
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// middleware
// 静的なファイル名でアクセスされたら、ここから配信
app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log("Nice to meet you!");
  next();
});

app.get("/", (req, res) => {
  res.render("index", { title: "title" });
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

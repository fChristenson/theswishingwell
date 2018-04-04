const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/wish", (req, res) => {
  res.render("wish");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

module.exports = app;

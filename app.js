const express = require("express");
const path = require("path");

const app = express();

//load viwe engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Data Around The World",
  });
});

app.get("/brazil", (req, res) => {
  res.render("brazil", {
    title: "Brazil",
  });
});
app.get("/eu", (req, res) => {
  res.render("eu", {
    title: "Europe",
  });
});

app.get("/eua", (req, res) => {
  res.render("eua", {
    title: "United States",
  });
});

app.listen(3001, () => {
  console.log("server running port 3001");
});

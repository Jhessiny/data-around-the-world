const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

//load viwe engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  let country = req.query.country;
  if (country == null) {
    res.render("index", {
      title: "Data Around The World",
    });
  } else if (country === "BR") {
    res.redirect("brazil");
  } else if (country === "EU") {
    res.redirect("eu");
  } else if (country === "EUA") {
    res.redirect("eua");
  }
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

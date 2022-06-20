const express = require("express");

//express app
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//Redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404
app.use((req, res) => {
  res.status(404).res.sendFile("./views/404.html", { root: __dirname });
});

//Listen For Request
app.listen(3000);

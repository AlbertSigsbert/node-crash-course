const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//Register the View engine
app.set("view engine", "ejs");

//Middleware & Static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Connect to MongoDB
const dbURI =
  "mongodb+srv://@cluster0.tmwlx.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrLParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});


//Blog Routes
app.use('/blogs', blogRoutes);


app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});


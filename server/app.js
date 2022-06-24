const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//express app
const app = express();

//Connect to MongoDB
const dbURI =
  "mongodb+srv://jacobsnell:ozark1234@cluster0.tmwlx.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrLParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//Register the View engine
app.set("view engine", "ejs");

//Sanbox
//Create
app.get("/add-blog", (req, res) => {
  const post = new Blog({
    title: "Blog Two",
    snippet: "Blog Two Snippet",
    body: "Blog Two Body",
  });

  post
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});


//Get Single Blog
app.get("/fetch-blog", (req, res) => {
    Blog.findById('62b57e0a6d3e36dc44ea9236')
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

//Middleware & Static files
app.use(express.static("public"));

app.get("/", (req, res) => {
     res.redirect('/blogs');
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//Blog Routes

app.get('/blogs', (req, res) => {
  Blog.find().sort({createdAt: -1 })
 .then((result) => res.render('index', { title:'Home', blogs:result }))
 .catch((err) => console.log(err));
});


app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

//Listen For Request

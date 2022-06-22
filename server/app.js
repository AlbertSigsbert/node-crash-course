const express = require("express");

//express app
const app = express();

//Register the View engine
app.set('view engine', 'ejs');


//Middleware & Static files
app.use(express.static('public'))

app.get("/", (req, res) => {
   const blogs = [
    {title:'Blog One',  snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {title:'Blog Two',  snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {title:'Blog Three',  snippet:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
   ]
  res.render('index', { title: 'Home', blogs});
});

app.get("/about", (req, res) => {
  res.render('about', { title: 'About'});
});

app.get("/blog/create", (req, res) => {
  res.render('create', { title: 'Create a new blog'});
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404'})
});

//Listen For Request
app.listen(3000);

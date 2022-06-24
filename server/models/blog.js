const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a Scheme
const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
}, {timestamps:true});

//Create a Model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
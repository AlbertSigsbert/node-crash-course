const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

//get all blogs
router.get("/", blogController.blog_index);

//display create form
router.get("/create", blogController.blog_create_get);

//post a new blog
router.post("/", blogController.blog_create_post);

//get single blog
router.get("/:id", blogController.blog_details);

//delete a blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;

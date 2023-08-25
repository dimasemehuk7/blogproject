const mongoose = require('mongoose');

const shortBlogSchema = new mongoose.Schema({
    title: String,
    description:String,
    type:String,
    commonId:String
});

const Blog = mongoose.model('shortBlog', shortBlogSchema);

module.exports = Blog;

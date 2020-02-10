// 
// models/blogPost.js
//
const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
}, {
    collection: 'dookie-kisses'
});

//Model
const BlogPost = mongoose.model('Blogpost', BlogPostSchema);

module.exports = BlogPost;
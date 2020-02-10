const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost')

// Routes
router.get('/', (req, res) => {
    BlogPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
    
});

router.get('/name', (req, res) => {
    const data = {
        username: 'jordanbpeterson',
        age: 58
    };
    res.json(data)
});

router.post('/save', (req, res) => {
    const data = req.body;
    const newBlogPost = new BlogPost(data);
    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({msg:'ERROR: Internal Server Error'});
            return;
        }
        res.json({msg: 'Data saved successfully'})
    });
});

module.exports = router;
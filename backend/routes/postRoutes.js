const express = require('express')
const router = express.Router()
const expressAsyncHandler = require('express-async-handler')
const Post = require('../models/postModel');

router.get('/', expressAsyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
}))

router.get('/:id', expressAsyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if(post) {
        res.json(post);
    } else {
        res.status(404).json({
            message: 'Prouct Not Found'
        });
    }
    
    
}))

router.route("/create").post((req, res) => {
    //Retrieve data for post
    const { title, content } = req.body;
    //Create a new Post and save it to DB
    const newPost = new Post({
        title,
        content
    });

    // Save the new post
    newPost.save().then(() => res.json("Post Added!")).catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").post((req, res) => {
    Post.findById(req.params.id)
        .then((post) => {
            post.title = req.body.title;
            post.body = req.body.body;

            post.save()
                .then(() => res.json("Post Edited"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router
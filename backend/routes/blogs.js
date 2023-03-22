const express = require('express')

const {
    createBlog,
    getBlog,
    getBlogs,
    deleteBlog,
    updateBlog
} = require("../controllers/blogController")

const Blog = require("../models/BlogModel")

const router = express.Router()

// routes
router.get('/', getBlogs )

router.get('/:id', getBlog)

router.post('/', createBlog )

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)





module.exports = router
const blogService = require("../services/BlogService")

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.json({data: blogs, status: "success"});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
exports.createBlog = async (req, res) => {
     try {
        const blog = await blogService.createBlog(req.body);
        res.json({data: blog, status: "success"})
     } catch (error) {
        res.status(500).json({error: error.message})
     }
}
exports.getBlogById = async (req, res) => {
    try {
       const blog = await blogService.getBlogById(req.params.id);
       res.json({data: blog, status: "success"})
    } catch (error) {
       res.status(500).json({error: error.message})
    }
}
exports.updateBlog = async (req, res) => {
    try {
       const blog = await blogService.updateBlog(req.params.id, req.body);
       res.json({data: blog, status: "success"})
    } catch (error) {
       res.status(500).json({error: error.message})
    }
}
exports.deleteBlog = async (req, res) => {
    try {
       const blog = await blogService.deleteBlog(req.params.id);
       res.json({data: blog, status: "success"})
    } catch (error) {
       res.status(500).json({error: error.message})
    }
}
const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongoDbId");

//Create Blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json({
      newBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Get Blog
const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
    res.json({
      updateViews,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Get All Blog
const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({
      blogs,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Update Blog
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      updatedBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Delete Blog
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json({
      deletedBlog,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog };

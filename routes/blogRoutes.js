const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
} = require("../controllers/blogController");
const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);
router.post("/create-blog", authMiddleware, isAdmin, createBlog);
router.put("/edit-blog/:id", authMiddleware, isAdmin, updateBlog);

module.exports = router;
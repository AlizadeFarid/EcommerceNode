const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
} = require("../controllers/productCategoryController");
const router = express.Router();

router.get("/", getAllCategory);
router.get("/:id", getCategory);
router.post("/create-category", authMiddleware, isAdmin, createCategory);
router.put("/edit-category/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);

module.exports = router;

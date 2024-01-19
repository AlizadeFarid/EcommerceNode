const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishList,
} = require("../controllers/productController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.put("/wishlist/add", authMiddleware, addToWishList);
router.post("/create-product", authMiddleware, isAdmin, createProduct);
router.put("/edit-product/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;

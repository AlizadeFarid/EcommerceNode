const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
} = require("../controllers/brandController");
const router = express.Router();

router.get("/", getAllBrand);
router.get("/:id", getBrand);
router.post("/create-brand", authMiddleware, isAdmin, createBrand);
router.put("/edit-brand/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

module.exports = router;

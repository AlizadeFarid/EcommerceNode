const express = require("express");
const {
  createCoupon,
  getAllCoupon,
  updateCoupon,
} = require("../controllers/couponController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, isAdmin, getAllCoupon);
router.post("/create-coupon", authMiddleware, isAdmin, createCoupon);
router.put("/edit-coupon/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, updateCoupon);

module.exports = router;

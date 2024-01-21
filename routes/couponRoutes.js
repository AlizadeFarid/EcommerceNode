const express = require("express");
const { createCoupon } = require("../controllers/couponController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create-coupon", authMiddleware, isAdmin, createCoupon);

module.exports = router;

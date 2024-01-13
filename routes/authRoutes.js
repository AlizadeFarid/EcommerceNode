const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  updatePassword,
} = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.put("/change-password", authMiddleware, updatePassword);
router.get("/logout", logoutUser);

module.exports = router;

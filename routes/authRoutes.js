const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;

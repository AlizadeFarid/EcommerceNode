const express = require("express");
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
} = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", getAllUsers);
router.put("/refresh", handleRefreshToken);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.put("/edit-user/:id", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);
router.delete("/:id", deleteUser);

module.exports = router;

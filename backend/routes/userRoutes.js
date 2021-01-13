import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// description: Auth the user and get a token
// route POST -> /api/users/login
// access public
router.post("/login", authUser);

// description: Get user profile info
// route GET -> /api/users/profile
// access private
router.route("/profile").get(protect, getUserProfile);

// description: update user profile info
// route PUT -> /api/users/profile
// access private
router.route("/profile").put(protect, updateUserProfile);

// description: create a new user
// route POST -> /api/users/profile
// access public
router.route("/").post(registerUser);

export default router;

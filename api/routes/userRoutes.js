import { Router } from "express";
const router = Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleWare.js";

router.route("/auth").post(authUser);
router.route("/").post(registerUser);
router.route("/logout").post(logoutUser);
router
  .route("/profile")
  .post(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;

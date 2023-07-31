import { Router } from "express";
const router = Router();

import {
  authUser,
  registerUser,
  logoutUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

router.route("/auth").post(authUser);
router.route("/").post(registerUser).post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/profile").post(getUserProfile).put(updateUserProfile);

export default router;

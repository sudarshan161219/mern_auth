import { Router } from "express";
const router = Router();

import { authUser } from "../controllers/userController.js";

router.route("/auth").post(authUser);

export default router;

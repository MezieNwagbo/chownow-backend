import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import {
  getCurrentUserHandler,
  createCurrentUserHandler,
  updateCurrentUserHandler,
} from "../controllers/my-user.controller";
import { validateMyUserRequest } from "../middleware/validation.middleware";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtParse, getCurrentUserHandler);
router.post("/", jwtCheck, createCurrentUserHandler);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  updateCurrentUserHandler
);

export default router;

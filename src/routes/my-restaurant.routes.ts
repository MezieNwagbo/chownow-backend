import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth.middleware";
import {
  createMyRestaurantHandler,
  getMyRestaurantHandler,
  updateMyRestaurantHandler,
} from "../controllers/my-restaurant.controller";
import { validateMyRestaurantRequest } from "../middleware/validation.middleware";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

// /api/my/restaurant

router.get("/", jwtCheck, jwtParse, getMyRestaurantHandler);
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  createMyRestaurantHandler
);

router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  updateMyRestaurantHandler
);

export default router;

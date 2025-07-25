import express from "express";
import { param } from "express-validator";

import { searchRestaurantHandler } from "../controllers/restaurant.controller";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  searchRestaurantHandler
);

export default router;

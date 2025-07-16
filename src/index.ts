import express from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";

import cors from "cors";
import "dotenv/config";

import myUserRoute from "./routes/my-user.routes";
import myRestaurantRoute from "./routes/my-restaurant.routes";
import restaurantRoute from "./routes/restaurant-routes";

import { v2 as cloudinary } from "cloudinary";

//connect database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
    console.log("Database connected");
  } catch (error) {
    console.log("Could not connect to database", error);
    console.log(process.env.MONGODB_CONNECTION_STRING);
    process.exit(1);
  }
};

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);

app.listen(7500, async () => {
  console.log("Server started on localhost 7500");
  await connectToDatabase();
});

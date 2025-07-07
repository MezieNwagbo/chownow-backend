import express from "express";
import type { Request, Response } from "express";
import mongoose from "mongoose";

import cors from "cors";
import "dotenv/config";

import myUserRoute from "./routes/my-user.routes";

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

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);

app.listen(7500, async () => {
  console.log("Server started on localhost 7500");
  await connectToDatabase();
});

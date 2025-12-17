import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();


const testUser = async () => {
  await User.create({
    name: "Test User",
    email: "test@noteables.dev"
  });
  console.log("Test user created");
};

testUser();


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Noteables API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

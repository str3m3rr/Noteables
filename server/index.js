import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
connectDB();



const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Noteables API running");
});

const PORT = process.env.PORT || 5000;
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

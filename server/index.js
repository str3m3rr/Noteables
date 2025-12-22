
import express from "express";
import cors from "cors";
import User from "./models/User.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";




connectDB();



const app = express();

app.use(cors());
app.use(express.json());




app.get("/", (req, res) => {
  res.send("Noteables API running");
});
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 5000;
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Global error handler (IMPORTANT)
app.use((err, req, res, next) => {
  console.error("🔥 Global Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: err
  });
});
import express from "express";
import protect from "../middleware/auth.js";
import { syncUser } from "../controllers/userController.js";

const router = express.Router();

// Sync Firebase user to MongoDB
router.post("/sync", protect, syncUser);

export default router;

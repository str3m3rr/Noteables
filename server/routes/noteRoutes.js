import express from "express";
import upload from "../middleware/upload.js";
import protect from "../middleware/auth.js";
import { createNote, getNotes } from "../controllers/noteController.js";

const router = express.Router();

// Protected note routes
router.post("/", protect, upload.single("file"), createNote);
router.get("/", protect, getNotes);

export default router;

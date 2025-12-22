import express from "express";
import upload from "../middleware/upload.js";
import { createNote, getNotes } from "../controllers/noteController.js";

const router = express.Router();

router.post("/", upload.single("file"), createNote);
router.get("/", getNotes);

export default router;

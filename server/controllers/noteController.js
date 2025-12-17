import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().populate("uploadedBy", "name email");
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

import Note from "../models/Note.js";

/**
 * @desc    Create a new note with Cloudinary file
 * @route   POST /api/notes
 * @access  Public (will be protected later)
 */
export const createNote = async (req, res) => {
  try {
    const { title, subject, semester, uploadedBy } = req.body;

    // ---- Basic validation ----
    if (!title || !subject || !semester || !uploadedBy) {
      return res.status(400).json({
        message: "All fields (title, subject, semester, uploadedBy) are required"
      });
    }

    if (!req.file || !req.file.path) {
      return res.status(400).json({
        message: "File upload failed or file missing"
      });
    }

    // ---- Create note ----
    const note = await Note.create({
      title: title.trim(),
      subject: subject.trim(),
      semester: Number(semester),
      uploadedBy,
      fileUrl: req.file.path // Cloudinary URL
    });

    return res.status(201).json({
      success: true,
      note
    });

  } catch (error) {
    console.error("❌ Create Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create note",
      error: error.message || error
    });
  }
};

/**
 * @desc    Get all notes
 * @route   GET /api/notes
 * @access  Public
 */
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find()
      .populate("uploadedBy", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: notes.length,
      notes
    });

  } catch (error) {
    console.error("❌ Get Notes Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch notes",
      error: error.message || error
    });
  }
};

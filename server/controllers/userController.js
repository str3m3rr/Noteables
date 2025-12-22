import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const syncUser = async (req, res) => {
  try {
    const { email } = req.user;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name: email.split("@")[0],
        email
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User sync failed",
      error: error.message
    });
  }
};
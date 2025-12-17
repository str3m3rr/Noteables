import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Attempting MongoDB connection...");
    await mongoose.connect(process.env.MONGO_URI, {
      tls: true,
      tlsAllowInvalidCertificates: true
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

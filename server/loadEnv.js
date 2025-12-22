import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

console.log("ENV loaded:", {
  cloud: process.env.CLOUDINARY_CLOUD_NAME,
  mongo: process.env.MONGO_URI ? "LOADED" : "MISSING"
});

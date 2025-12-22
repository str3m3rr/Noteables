import admin from "firebase-admin";
import fs from "fs";
import path from "path";

// Path to service account key (gitignored)
const serviceAccountPath = path.resolve("keys/firebasekey.json");

const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf8")
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default admin;

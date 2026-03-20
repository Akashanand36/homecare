import express from "express";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB error:", err));

// API route example
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Serve React build
const __dirname = path.resolve();
// Serve static files
app.use(express.static(path.join(__dirname, "client/build")));

// Catch-all (React Router)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

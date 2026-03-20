const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb+srv://akashanand3615_db_user:test1234@homecare.pgxdwdr.mongodb.net/?appName=homecare")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// Schema
const ReviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  message: String,
});

const Review = mongoose.model("Review", ReviewSchema);

// Routes
app.post("/add-review", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.send("Review Added");
});

app.get("/reviews", async (req, res) => {
  const reviews = await Review.find().sort({ _id: -1 });
  res.json(reviews);
});

app.listen(5000, () => console.log("Server running on port 5000"));

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://homecare-ngx8.onrender.com";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    message: ""
  });

  // ⭐ Static reviews
  const staticReviews = [
    {
      name: "Ravi Kumar",
      rating: 5,
      message: "Excellent service and very caring staff!"
    },
    {
      name: "Lakshmi",
      rating: 4,
      message: "Very professional and helpful support."
    },
    {
      name: "Arun",
      rating: 5,
      message: "Highly recommended for homecare services."
    }
  ];

  // ✅ Fetch reviews
  useEffect(() => {
    axios.get(`${API_URL}/reviews`)
      .then(res => setReviews(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  // ✅ Submit review
  const submit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    axios.post(`${API_URL}/add-review`, form)
      .then(res => {
        setReviews([res.data, ...reviews]);
        setForm({ name: "", email: "", rating: 5, message: "" });
      })
      .catch(err => console.error("Submit error:", err));
  };

  return (
    <section className="section reviews" id="reviews">
      <h2>Client Reviews</h2>

      <div className="reviews-main">

        {/* LEFT SIDE */}
        <div className="reviews-left">
          <h3>Top Reviews</h3>
          {staticReviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-top">
                <span className="stars">{"⭐".repeat(r.rating)}</span>
                <span className="name">{r.name}</span>
              </div>
              <p className="message">{r.message}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="reviews-right">

          {/* FORM */}
          <div className="review-form-card">
            <h3>Share Your Experience</h3>

            <input
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Your Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <select
              value={form.rating}
              onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
            >
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Bad</option>
            </select>

            <textarea
              placeholder="Write your review..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />

            <button className="btn-submit" onClick={submit}>
              Submit Review
            </button>
          </div>

          {/* DYNAMIC REVIEWS */}
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-top">
                  <span className="stars">{"⭐".repeat(r.rating)}</span>
                  <span className="name">{r.name}</span>
                </div>
                <p className="message">{r.message}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Reviews;

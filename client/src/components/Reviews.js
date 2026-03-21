import React, { useEffect, useState } from "react";
import axios from "axios";

// ✅ SheetBest API
const API_URL = "https://api.sheetbest.com/sheets/c0d7ae33-b786-47d8-9eca-f995601d32bf";

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

  // ✅ FETCH from Google Sheet
  useEffect(() => {
    fetchReviews();

    // 🔄 Auto refresh every 5 sec
    const interval = setInterval(fetchReviews, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchReviews = () => {
    axios
      .get(API_URL)
      .then(res => {
        const formatted = res.data.map(item => ({
          name: item.Name,
          rating: Number(item.Rating),
          message: item.Message
        }));

        setReviews(formatted.reverse());
      })
      .catch(err => console.error("Fetch error:", err));
  };
  
  return (
  <section className="reviews-section" id="reviews">
    <h2 className="reviews-title">What Our Clients Say</h2>

    <div className="reviews-grid">
      {[...staticReviews, ...reviews]
        .filter(r => r.name && r.message)
        .map((r, i) => (
          <div className="review-card-google" key={i}>

            {/* STARS */}
            <div className="stars">
              {"⭐".repeat(r.rating || 5)}
            </div>

            {/* MESSAGE */}
            <p className="review-text">{r.message}</p>

            {/* USER */}
            <h4 className="review-name">{r.name}</h4>
            <span className="review-location">Chennai</span>

            {/* GOOGLE LOGO */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              className="google-logo-img"
              alt="google"
            />
          </div>
        ))}
    </div>
  </section>
);
}

export default Reviews;

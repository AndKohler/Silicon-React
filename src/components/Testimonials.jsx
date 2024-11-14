import React, { useState, useEffect } from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "star filled" : "star"}
        >
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};


function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className="testimonials-container">
      <h1>Clients are Loving Our App</h1>
      <div className="quote-boxes-container">
        {testimonials.map((testimonial, index) => (
          <div className="text-boxes" key={index}>
            <div className="quote-icon-box">
              <img src="/quoteicon.svg" alt="quoteicon" />
            </div>
            <div className="review-box">
              <StarRating rating={testimonial.starRating} />{" "}
              <p>{testimonial.comment}</p>
              <div className="author-box">
                <div className="profilePic">
                  <img src={testimonial.avatarUrl} alt={`${testimonial.author} profile`} />
                </div>
                <div>
                  <h2>{testimonial.author}</h2>
                  <span className="jobRole">{testimonial.jobRole}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

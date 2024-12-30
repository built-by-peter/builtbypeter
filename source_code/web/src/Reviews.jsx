import Review from "./Review";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const Reviews = ({host}) => {

    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${host}/getReviews`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [host]);

  if (reviews)

    return (
        <div
        id="reviewsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Review review={review} />
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewsCarousel"
            data-bs-slide="prev"
            >
            <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{
                    backgroundColor: "dadada",
                    borderRadius: "50%",
                }}
            ></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewsCarousel"
            data-bs-slide="next"
            >
            <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{
                    backgroundColor: "dadada",
                    borderRadius: "50%",
                }}
            ></span>
            <span className="visually-hidden">Next</span>
            </button>

      </div>
    )
}
export default Reviews;
const Review = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-top">
        <p className="review-name">{review.name}</p>
        <img
          className="review-stars"
          src={`${process.env.PUBLIC_URL}/5star.png`}
          alt={`${review.name} gave 5 stars`}
        />
      </div>
      <p className="review-text">{review.review}</p>
    </div>
  );
};

export default Review;

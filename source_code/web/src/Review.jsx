const Review = ({ review }) => {
  return (
    <div
      style={{
        borderRadius: 10,
        backgroundColor: "#dadada",
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        width: "100%",
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          padding: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: 20, fontWeight: 100 }}>{review.name}</p>
        <img
          src={`${process.env.PUBLIC_URL}/5star.png`}
          alt={review.name}
          style={{ width: "30%" }}
        />
      </div>
      {/* Horizontal Rule */}
      <hr
        style={{
          width: "100%",
          margin: 0,
          border: 0,
          borderTop: "1px solid rgba(0, 0, 0, 0.1)", // Very light line
        }}
      />
      {/* Review Text Section */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <p style={{ fontSize: "0.75rem" ,margin: 0 }}>{review.review}</p>
      </div>
    </div>
  );
};

export default Review;

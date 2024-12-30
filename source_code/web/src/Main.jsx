import ContactForm from "./ContactForm";
import Reviews from "./Reviews";
import { useState, useEffect } from "react";
import "./styles.css";

const Main = () => {
  const SERVER_URL = `https://resume-backend-f553.onrender.com`;
  const [contact, setContact] = useState(false);
  const galleryUrl = "https://www.instagram.com/built.by.peter/";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple check to see if the user is on a mobile device
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsMobile(
      /android|iPad|iPhone|iPod|windows phone|mobile/i.test(userAgent)
    );
  }, []);

 

  return (
    <div
      style={{
        display: "flex",
        padding: 10,
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url('bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay", // Mix the image and color
        backgroundColor: "rgba(242, 242, 242, 0.5)", // Semi-transparent gray
        flex: 1,
        width: "100%"
      }}
    >

      {contact && (
        <div>
        
        <img
          src={`back.png`}
          alt="Toggle Form"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 1000,
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          onClick={() => setContact(false)}
        />

        <ContactForm host={SERVER_URL} isMobile={isMobile} />
      </div>
      )}

      {!contact && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, justifyContent: "space-between", width: "100%"}}>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p style={{ fontSize: isMobile ? "3rem" : "4rem", fontWeight: 100, margin: 0, lineHeight: 1}}>
            BUILT BY PETER
          </p>
          <p style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 100,  color: "#eee",margin: 0, lineHeight: 1, padding: 5, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>Just for You</p>
        </div>

        <div style={{ gap: 20, display: "flex", flexDirection: "column"}}>
          <button
            onClick={() => {
              window.open(galleryUrl, "_blank", "noopener,noreferrer");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: "50px",
              padding: "10px 20px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              fontWeight: "100",
            }}
          >
            <img
              src="camera.png"
              alt={"icon"}
              style={{
                width: "24px",
                height: "24px",
                marginRight: "10px",
              }}
            />
            Browse photo gallery
          </button>

          <button
            onClick={() => {
              setContact(true);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: "50px",
              padding: "10px 20px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              fontWeight: "100",
            }}
          >
            <img
              src="email.png"
              alt={"icon"}
              style={{
                width: "24px",
                height: "24px",
                marginRight: "10px",
              }}
            />
            Schedule a free quote
          </button>

          
        </div>

        <div style={{ width: "100%", maxWidth: 500 }}>
          <Reviews host={SERVER_URL}></Reviews>
        </div>
      </div>
        
        )}

      </div>
      
      
  );
};

export default Main;

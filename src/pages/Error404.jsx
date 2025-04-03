import React from "react";
import Error404Img from "../assets/404-Removed.png"; // Assuming you have this image

export default function Error404() {
  return (
    <div className="error-page" style={errorPageStyle}>
      <div className="error-content" style={errorContentStyle}>
        <img src={Error404Img} alt="404 Error" style={errorImageStyle} />
        <h2 style={headingTextStyle}>Oops! Page Not Found.</h2>
        <p style={paragraphStyle}>
          We're sorry, it seems you've stumbled upon a page that doesn't exist.
          This could be due to a broken link or an incorrect URL.
        </p>
        <p style={paragraphStyle}>
          Don't worry, we can help you get back on track!
        </p>
        <div style={actionContainerStyle}>
          <a href="/" style={actionButtonStyle}>
            Return to Home
          </a>
          <a href="/explore" style={actionButtonStyle}>
            Explore our Content
          </a>
        </div>
      </div>
    </div>
  );
}

// Styles
const errorPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f9f9f9",
  fontFamily: "sans-serif",
};

const errorContentStyle = {
  textAlign: "center",
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const errorImageStyle = {
  maxWidth: "100%",
  height: "auto",
  marginBottom: "1.5rem",
};

const headingTextStyle = {
  fontSize: "2.5rem",
  color: "#333",
  marginBottom: "1rem",
};

const paragraphStyle = {
  fontSize: "1.1rem",
  color: "#666",
  lineHeight: "1.6",
  marginBottom: "1.5rem",
};

const actionContainerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
};

const actionButtonStyle = {
  padding: "1rem 2rem",
  backgroundColor: "#007bff",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  margin: "0 1rem",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "#0056b3",
  },
};

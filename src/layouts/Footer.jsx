import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <div className="row" style={rowStyle}>
          <div className="col-md-4 mb-3 mb-md-0" style={columnStyle}>
            <h4 style={headingStyle}>About Us</h4>
            <p style={paragraphStyle}>
              Cypher is dedicated to providing innovative solutions and
              connecting people. We strive to create a better future through
              technology and community engagement.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0" style={columnStyle}>
            <h4 style={headingStyle}>Quick Links</h4>
            <ul style={navListStyle}>
              <li style={navItemStyle}>
                <Link to="/about" style={navLinkStyle}>
                  About Us
                </Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/contact" style={navLinkStyle}>
                  Contact
                </Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/privacy" style={navLinkStyle}>
                  Privacy Policy
                </Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/terms" style={navLinkStyle}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4" style={columnStyle}>
            <h4 style={headingStyle}>Connect With Us</h4>
            <div style={socialIconsStyle}>
              <a href="#" style={socialIconLinkStyle}>
                <FaFacebook />
              </a>
              <a href="#" style={socialIconLinkStyle}>
                <FaTwitter />
              </a>
              <a href="#" style={socialIconLinkStyle}>
                <FaInstagram />
              </a>
              <a href="#" style={socialIconLinkStyle}>
                <FaLinkedin />
              </a>
            </div>
            <p style={copyrightStyle}>
              © Cypher 2025. Developed by Sujit Gupta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Styles as JavaScript objects
const footerStyle = {
  backgroundColor: "#f0f8ff",
  padding: "2rem 0",
  marginTop: "3rem",
  borderTop: "1px solid #d1e8ff",
  boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.08)",
  color: "#333",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const rowStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const columnStyle = {
  padding: "0 15px",
};

const headingStyle = {
  fontSize: "1.3rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#000", // Black text
};

const paragraphStyle = {
  fontSize: "0.9rem",
  lineHeight: "1.4",
  marginBottom: "1rem",
  color: "#000", // Black text
};

const navListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  marginBottom: "0.8rem",
};

const navLinkStyle = {
  color: "#000", // Black text
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "color 0.3s ease",
};

const socialIconsStyle = {
  display: "flex",
  marginBottom: "1rem",
};

const socialIconLinkStyle = {
  color: "#000", // Black text
  fontSize: "1.3rem",
  marginRight: "0.8rem",
  transition: "color 0.3s ease",
};

const copyrightStyle = {
  fontSize: "0.8rem",
  color: "#000", // Black text
};

// Hover effects
navLinkStyle[":hover"] = socialIconLinkStyle[":hover"] = {
  color: "#555",
};

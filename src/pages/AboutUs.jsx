import React from "react";
import AboutItem from "../components/AboutItem";
import Vector4 from "../assets/Vector/4.png";

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#f4f8fb", // Soft, light blue background
        padding: "4rem 0", // Increased padding for better spacing
      }}
    >
      <div className="container-fluid px-0">
        <div className="container mb-md-0 mt-5">
          <h1
            className="heading-text au-text"
            style={{ color: "#2c3e50", fontWeight: "600" }} // Darker, more professional heading
          >
            About Us
          </h1>
          <img
            src={Vector4}
            alt="Decorative Vector"
            className="Vector4"
            style={{ filter: "opacity(0.8)", marginTop: "1rem" }} // Subtle vector
          />
          <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
            <div
              className="col-lg-12 col-md-12 mt-3 aboutus-main-card"
              style={{
                backgroundColor: "#f1f1f1", // Pure white card background
                borderRadius: "12px", // Slightly less rounded corners
                padding: "3rem", // More padding inside the card
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.08)", // More pronounced shadow
                border: "1px solid #000", // Subtle card border
              }}
            >
              <AboutItem
                q="Our History:"
                a="Founded in 2023, we started with a vision to connect people through accessible profile exploration. We've grown from a small team to a thriving platform."
              />
              <AboutItem
                q="Our Values:"
                a="Integrity, innovation, and user satisfaction are at the core of our values. We strive to create a respectful and inclusive environment for all."
              />
              <AboutItem
                q="Our Team:"
                a="Our team consists of passionate developers, designers, and support staff dedicated to providing the best possible experience for our users."
              />
              <AboutItem
                q="Future Goals:"
                a="We aim to expand our features, enhance user interaction, and integrate cutting-edge technologies to remain at the forefront of profile exploration."
              />
              <AboutItem
                q="Community Involvement:"
                a="We actively participate in community events and initiatives, fostering a sense of belonging and collaboration among our users."
              />
              <AboutItem
                q="Client Testimonials:"
                a="Explore to has revolutionized how I connect with people. It's intuitive and user-friendly - Jane D."
              />
              <AboutItem
                q="Our Commitment:"
                a="We are committed to continuous improvement, ensuring our platform evolves to meet the changing needs of our users."
              />
              <AboutItem
                q="Contact Details:"
                a="Explore, Pune, India +91 0123456789. Email: info@exploreto.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

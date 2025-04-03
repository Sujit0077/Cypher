import React from "react";
import Button from "../components/Button";
import Vector1 from "../assets/Vector/1.png";
import Vector2 from "../assets/Vector/2.png";
import Vector3 from "../assets/Vector/3.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-4 align-items-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="primary-text" style={{ marginTop: "3rem" }}>
                Discover Connections, Explore Possibilities
              </h1>
              <h3
                className="para-1"
                style={{ marginTop: "1rem", lineHeight: "1.6rem" }}
              >
                Unleash the power of seamless profile exploration. Connect with
                individuals, discover new opportunities, and expand your network
                with our intuitive platform.
              </h3>
              <div style={{ marginTop: "2rem" }}>
                <Link to="/cypher">
                  <Button label="Start Exploring" c="main-btn" type="start" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Graphical-1"
                style={{
                  borderRadius: "1rem",
                  maxWidth: "80%",
                  height: "auto",
                }}
              />
            </div>
          </div>

          <img src={Vector3} alt="Vector3" className="Vector3" />
          <img src={Vector2} alt="Vector2" className="Vector2" />
        </div>
      </div>
    </section>
  );
}

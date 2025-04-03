import React from "react";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";

const ProfileCard = ({
  name,
  age,
  location,
  occupation,
  interests,
  address,
  linkedin,
  instagram,
  image,
}) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-image-container">
          <img src={image} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-info">
            <span className="info-label">Age:</span> {age}
          </p>
          <p className="profile-info">
            <span className="info-label">Location:</span> {location}
          </p>
          <p className="profile-info">
            <span className="info-label">Occupation:</span> {occupation}
          </p>
          <p className="profile-info">
            <span className="info-label">Interests:</span> {interests}
          </p>
          <p className="profile-info">
            <span className="info-label">Address:</span> {address}
          </p>
          <div className="social-links">
            <div className="social-link">
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="social-icon"
                style={{ width: "35px", height: "35px" }}
              />
              <span className="social-text">LinkedIn: {linkedin}</span>
            </div>
            <div className="social-link">
              <img
                src={Instagram}
                alt="Instagram"
                className="social-icon"
                style={{ width: "35px", height: "35px" }}
              />
              <span className="social-text">Instagram: {instagram}</span>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .profile-card-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            margin: 1rem;
            padding: 1rem;
          }

          .profile-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f2f2f2;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
            padding: 2rem;
            font-family: 'Arial', sans-serif;
          }

          .profile-image-container {
            margin-bottom: 1.5rem;
          }

          .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .profile-details {
            text-align: center;
            width: 100%;
          }

          .profile-name {
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #333;
          }

          .profile-info {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            color: #555;
            line-height: 1.6;
          }

          .info-label {
            font-weight: 600;
            color: #333;
            margin-right: 0.3rem;
          }

          .social-links {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            width: 100%;
            align-items: flex-start; /* Align to left */
          }

          .social-link {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
          }

          .social-icon {
            width: 35px;
            margin-right: 0.5rem;
          }

          .social-text {
            font-size: 1rem;
            color: #333;
          }

          @media (min-width: 768px) {
            .profile-card {
              flex-direction: row;
              align-items: flex-start;
              text-align: left;
            }

            .profile-image-container {
              margin-right: 2rem;
              margin-bottom: 0;
            }

            .profile-details {
              text-align: left;
            }

            .social-links {
              flex-direction: column;
              align-items: flex-start; /* Align to left */
            }

            .social-link{
              margin-right: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProfileCard;

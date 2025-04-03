import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import Vector1 from "../assets/Vector/1.png";
import data from "../pages/data.js";
import { FaMapMarkerAlt, FaEye, FaSearch } from "react-icons/fa";

const Explore = () => {
  const [profileData, setProfileData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    setProfileData(data);
  }, []);

  const filteredProfileDetails = profileData.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openProfileModal = (profile) => {
    setSelectedProfile(profile);
  };

  const closeProfileModal = () => {
    setSelectedProfile(null);
  };

  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <h1
        className="d-flex justify-content-center"
        style={{
          marginBottom: "2rem",
          color: "#333",
          fontSize: "2.5rem", // Added font size
          fontWeight: "600", // Added font weight
          letterSpacing: "1px", // Added letter spacing
        }}
      >
        Discover Profiles
      </h1>
      <div
        className="d-flex justify-content-center align-items-center m-5"
        style={{ position: "relative" }}
      >
        <input
          type="search"
          name=""
          id=""
          className="h-55 rounded-3 w-50 fs-6"
          placeholder="Search profiles by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            paddingLeft: "3rem",
            border: "1px solid #ddd",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            fontSize: "1rem", // Added font size to input
          }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center m-lg-5">
        {filteredProfileDetails.length > 0 ? (
          <table
            className="custom-table"
            style={{
              backgroundColor: "#f1f1f1",
              border: "1px solid rgb(3, 18, 15)",
            }}
          >
            <thead>
              <tr>
                <th>Profile</th>
                <th>View</th>
                <th>Address on Map</th>
              </tr>
            </thead>
            <tbody>
              {filteredProfileDetails.map((profile, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex justify-content-center align-items-center">
                      <div className="col-lg-12">
                        <ProfileCard
                          name={profile.name}
                          age={profile.age}
                          location={profile.location}
                          occupation={profile.occupation}
                          interests={profile.interests}
                          address={profile.address}
                          image={profile.image}
                          instagram={profile.instagram}
                          linkedin={profile.linkedin}
                        />
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        className="view-button"
                        onClick={() => openProfileModal(profile)}
                      >
                        <FaEye style={{ marginRight: "5px" }} />
                        <span style={{ marginLeft: "3px" }}>View</span>
                      </button>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Link
                        to={`https://www.google.com/maps/search/?api=1&query=$${profile.address.street}, ${profile.address.city}, ${profile.address.state}, ${profile.address.zipcode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="map-button">
                          <FaMapMarkerAlt style={{ marginRight: "5px" }} />
                          <span style={{ marginLeft: "3px" }}>Map</span>
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: "center", color: "#555", fontSize: "1.1rem" }}>
            No profiles found with that name.
          </p>
        )}
      </div>
      {selectedProfile && (
        <div
          className="modal"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            overflow: "auto",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fefefe",
              margin: "15% auto",
              padding: "20px",
              border: "1px solid #888",
              width: "80%",
            }}
          >
            <span
              className="close"
              onClick={closeProfileModal}
              style={{
                color: "#aaa",
                float: "right",
                fontSize: "28px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "-20px",
                marginRight: "-20px",
              }}
            >
              ×
            </span>
            <ProfileCard
              name={selectedProfile.name}
              age={selectedProfile.age}
              location={selectedProfile.location}
              occupation={selectedProfile.occupation}
              interests={selectedProfile.interests}
              address={selectedProfile.address}
              image={selectedProfile.image}
              instagram={selectedProfile.instagram}
              linkedin={selectedProfile.linkedin}
            />
          </div>
        </div>
      )}
      <style>
        {`
          .view-button, .map-button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            min-width: 120px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
          }

          .view-button {
            background-color: black;
            color: white;
          }

          .map-button {
            background-color: #3498db;
            color: white;
          }

          .view-button:hover, .map-button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </section>
  );
};

export default Explore;

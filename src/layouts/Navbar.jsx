import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../components/Button";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleResize = () => {
      const newIsSmallScreen = window.innerWidth < 992;
      setIsSmallScreen(newIsSmallScreen);
      if (!newIsSmallScreen && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavOpen]);

  const toggleNav = () => {
    if (isSmallScreen) {
      setIsNavOpen(!isNavOpen);
    }
  };

  const handleContactClick = (e) => {
    if (location.pathname !== "/") {
      e.preventDefault(); // Prevent default navigation if not on home page
      window.location.href = "/#footer-section"; // Navigate to footer on home page
    } else {
      const footerElement = document.getElementById("footer-section");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" }); // Scroll to footer
      }
    }
    if (isSmallScreen) {
      setIsNavOpen(false);
    }
  };

  return (
    <header id="navbar" style={headerStyle}>
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid" style={containerStyle}>
          <NavLink to="/" style={logoStyle}>
            Cypher
          </NavLink>
          {isSmallScreen && (
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
              style={togglerStyle}
            >
              <MenuIcon style={togglerIconStyle} />
            </button>
          )}
          <div
            className={`navbar-collapse ${isNavOpen ? "show" : ""}`}
            style={
              isSmallScreen
                ? {
                    position: "fixed",
                    top: 0,
                    right: isNavOpen ? "0" : "-250px",
                    width: "250px",
                    height: "100%",
                    backgroundColor: "#f4f8fb",
                    transition: "right 0.3s ease",
                    paddingTop: "4rem",
                    zIndex: 101,
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }
                : {
                    position: "static",
                    left: "0",
                    width: "auto",
                    height: "auto",
                    paddingTop: "0",
                    display: "flex",
                    justifyContent: "flex-end",
                  }
            }
          >
            {isSmallScreen && isNavOpen && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <NavLink to="/" style={{ ...logoStyle, paddingLeft: "1rem" }}>
                  Cypher
                </NavLink>
                <button
                  onClick={() => setIsNavOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    paddingRight: "1rem",
                  }}
                >
                  <CloseIcon style={{ color: "#2c3e50" }} />
                </button>
              </div>
            )}
            <ul className="navbar-nav" style={navListStyle}>
              <li className="nav-item" style={navItemStyle}>
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  exact
                  style={navLinkStyle}
                  onClick={() => isSmallScreen && setIsNavOpen(false)}
                >
                  Home <HomeOutlinedIcon style={iconStyle} />
                </NavLink>
              </li>
              <li className="nav-item" style={navItemStyle}>
                <NavLink
                  to="/aboutus"
                  className="nav-link"
                  activeClassName="active"
                  style={navLinkStyle}
                  onClick={() => isSmallScreen && setIsNavOpen(false)}
                >
                  About Us <Groups2OutlinedIcon style={iconStyle} />
                </NavLink>
              </li>
              <li style={navItemStyle}>
                <NavLink
                  to="/cypher"
                  className="nav-link"
                  style={buttonLinkStyle}
                  onClick={() => isSmallScreen && setIsNavOpen(false)}
                >
                  <Button label="Start Exploring" c="login-btn" type="start" />
                </NavLink>
              </li>
              <li style={navItemStyle}>
                <NavLink
                  to="/footer"
                  className="nav-link"
                  style={navLinkStyle}
                  onClick={handleContactClick} // Use custom click handler
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

// ... (rest of the styles remain the same)
const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  backgroundColor: "#f4f8fb",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const navStyle = {
  padding: "1rem 0",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoStyle = {
  fontFamily: "YourLogoFont, sans-serif",
  fontSize: "2rem",
  fontWeight: 700,
  color: "#2c3e50",
  letterSpacing: "-1px",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "0.5rem 1rem",
};

const togglerStyle = {
  borderColor: "#2c3e50",
  background: "transparent",
  border: "none",
};

const togglerIconStyle = {
  color: "#2c3e50",
  fontSize: "2rem",
};

const collapseStyle = {
  transition: "left 0.3s ease",
  zIndex: 101,
  overflowY: "auto",
};

const navListStyle = {
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  marginLeft: "1.5rem",
};

const navLinkStyle = {
  color: "#2c3e50",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  transition: "color 0.3s ease",
  padding: "0.5rem 1rem",
};

const buttonLinkStyle = {
  textDecoration: "none",
};

const iconStyle = {
  marginLeft: "0.5rem",
};

navLinkStyle[":hover"] = {
  color: "#007bff",
};

navLinkStyle["&.active"] = {
  fontWeight: 700,
  borderBottom: "2px solid #007bff",
};

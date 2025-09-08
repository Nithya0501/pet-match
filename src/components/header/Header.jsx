import React from "react";
import { Link, useLocation } from "react-router-dom";
import dogLogo from "../../assets/pet-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Header.scss";
 
function Header() {
  const { pathname } = useLocation();
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FFD343" }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <img
            src={dogLogo}
            alt="Dog Logo"
            width="30"
            height="27"
            className="d-inline-block align-top me-2"
          />
          Pet Match
        </Link>
 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
    
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/browsepets" ? "active" : ""}`} to="/browsepets">
                Browse Pets
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/petsprofile" ? "active" : ""}`} to="/petsprofile">
                Pets Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/about" ? "active" : ""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Header;













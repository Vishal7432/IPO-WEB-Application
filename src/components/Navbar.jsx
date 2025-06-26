import logo from "../assest/logo/logo.png";
import "./Navbar.css";
import React, { useState } from "react";
import LoginForm from "./LoginForm";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar shodow-hover px-3 nav nav-underline ">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            width="100%"
            height="30"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Media
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
          <div className="ms-auto">
            {" "}
            {isLoggedIn ? (
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="btn btn-outline-primary"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      {showLogin && (
        <LoginForm
          onClose={() => setShowLogin(false)}
          onLogin={() => setIsLoggedIn(true)}
        />
      )}
    </>
  );
}

export default Navbar;

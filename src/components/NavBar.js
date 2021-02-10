import React from "react";
import Auth from "../authentication/Auth";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary py-1 shadow-sm">
      <a className="navbar-brand" href="#">
        Webinar Portal
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          {Auth.isAuthenticated() ? (
            <li className="nav-item">
              <a className="nav-link" href="\manage">
                Manage Webinars
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="\register">
                Register as a Teacher
              </a>
            </li>
          )}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Programming
              </a>
              <a className="dropdown-item" href="#">
                Cloud
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                A/L
              </a>
              <a className="dropdown-item" href="#">
                O/L
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
        <li className="nav-link">
          {Auth.isAuthenticated() ? (
            <a href="/logout" className="btn btn-outline-secondary">
              Logout
            </a>
          ) : (
            <a href="/login" className="btn btn-outline-secondary">
              Login
            </a>
          )}
        </li>
        <a className="" href="#"></a>
      </div>
    </nav>
  );
}

export default NavBar;

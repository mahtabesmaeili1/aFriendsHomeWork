// Home.js
import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand neon-effect">SOGOL-DIALA-LARISSA-SUUS</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Shop">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

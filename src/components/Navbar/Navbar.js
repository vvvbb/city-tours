import React from "react";
import "./navbar.scss";
export default function Navbar() {
  const logo = "https://picsum.photos/250/80";

  return (
    <nav className="navbar">
      <img src={logo} alt="city tours guide" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

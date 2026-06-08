import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Force Fabric Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>

        <li
          className="dropdown"
          onClick={() => setShowServices(!showServices)}
        >
          Our Services ▾

          {showServices && (
            <ul className="dropdown-menu">
              <li>Cloud</li>
              <li>DevOps & Cybersecurity</li>
              <li>GDPR & Responsible AI</li>
              <li>Secured WordPress</li>
              <li>Business Apps</li>
              <li>Blockchain & Web3</li>
              <li>IT Training</li>
              <li>FinOps</li>
              <li>Digital Marketing</li>
            </ul>
          )}
        </li>

        <li>Blog</li>
        <li>About</li>
        <li>Client Cases</li>
        <li>Offers & Packs</li>
        <li>Careers</li>
        <li>Resources</li>
        <li>Contact</li>
      </ul>

      <div className="right-section">
        <button className="quote-btn">
          Request a Quote
        </button>

        <div
          className="language-dropdown"
          onClick={() => setShowLanguage(!showLanguage)}
        >
          Language ▾

          {showLanguage && (
            <ul className="language-menu">
              <li>French</li>
              <li>English</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
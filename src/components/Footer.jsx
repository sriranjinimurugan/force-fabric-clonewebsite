import { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
  FaCircle,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter an email");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);
      setEmail("");
    } catch (error) {
      alert("Subscription failed");
      console.error(error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-column">
          <h2 className="footer-logo">ForceFabric</h2>

          <p>
            Digital solutions for innovative companies.
            Design, development & strategic support.
          </p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Navigation</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>Cloud</li>
            <li>GDPR</li>
            <li>WordPress</li>
            <li>Business Apps</li>
            <li>Web3</li>
            <li>Training</li>
            <li>FinOps</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <ul className="contact-list">
            <li>
              <FaCircle className="dot" />
              baskaranephilip@forcefabric.com
            </li>

            <li>
              <FaCircle className="dot" />
              +33 6 40 56 53 74
            </li>

            <li>
              <FaCircle className="dot" />
              200 rue de la Croix Nivert Paris 75015
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column newsletter">
          <h3>Stay informed</h3>

          <p>
            Get our news and guides straight to your inbox.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>

          <small>
            No spam. Unsubscribe in one click.
          </small>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ForceFabric · All rights reserved
        </p>

        <div className="footer-links">
          <span>Legal Notice</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>

        <button
          className="top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
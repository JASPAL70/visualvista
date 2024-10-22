import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/"> Home </Link>
          <Link
            to="/about"
          >
            About
          </Link>
          <Link to="/"> FAQ </Link>
          <Link to="/"> Services </Link>
        </div>

        <div className="contact-content">
          <Link to="/"> Shipping & Returns </Link>
          <Link to="/"> Store Policy </Link>
          <Link to="/"> Payment Method </Link>
        </div>

        <div className="contact-content">
          <Link to="/feedback"> Feedback </Link>
          <Link to="mail to:jasub787@gmail.com" target="_blank">
            Contact
          </Link>
          <Link to="/"> Tel: 123-456-7890 </Link>
        </div>

        <div className="contact-content">
          <Link
            to="https://github.com/JASPAL70/visualvista"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            to="www.linkedin.com/in/jaspalsingh772"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link to="https://x.com/Jaspal_singh0?t=_9J_69FwO98FGdXuricMRA&s=09" target="_blank">
            Twitter
          </Link>
        </div>
      </div>

      <div class="action">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input type="submit" name="submit" value="Submit" required></input>
        
        </form>
      </div>
      <div class="last">
        <p>@ 2024 visualvista | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

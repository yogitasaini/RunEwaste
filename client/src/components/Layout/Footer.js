import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" style={{ paddingBottom: "0%" }}>
      <h1 className="text-center">All Rights Reserved &copy; RunEWaste</h1>
      <p className="text-center">
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
        <Link to="/policy" className="footer-link">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;

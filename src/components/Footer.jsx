import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="h-12 px-5 bg-black text-white flex justify-between items-center">
      <div className="flex">
        <p className="pl-3">© 2020 The Bona Vias Foundation</p>
        <Link to="/privacy" className="pl-3">
          <span className="hover:underline">Privacy Policy</span>
        </Link>
        <Link to="/terms" className="pl-3">
          <span className="hover:underline">Terms of Service</span>
        </Link>
      </div>
      <div className="flex items-center">
        <p className="pr-3">Follow Us!</p>
        <Link to="/#">
          <FaFacebookSquare className="social-icon" />
        </Link>
        <Link to="/#">
          <FaTwitter className="social-icon" />
        </Link>
        <Link to="/#">
          <FaInstagram className="social-icon" />
        </Link>
        <Link to="/#">
          <FaYoutube className="social-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

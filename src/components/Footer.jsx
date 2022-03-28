import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="h-12 bg-black text-white flex justify-between items-center">
      <div className="flex">
        <p className="pl-3">© 2020 The Bona Vias Foundation</p>
        <Link to="/privacy" className="pl-3">
          <span>Privacy Policy</span>
        </Link>
        <Link to="/terms" className="pl-3">
          <span>Terms of Service</span>
        </Link>
      </div>
      <div className="flex">
        <p className="pr-3">Follow Us!</p>
        <FaFacebookSquare className="pr-3 h-7 w-7" />
        <FaTwitter className="pr-3 h-7 w-7" />
        <FaInstagram className="pr-3 h-7 w-7" />
        <FaYoutube className="pr-3 h-7 w-7" />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div
      className={
        isMenuOpen ? "flex flex-col justify-center items-center bg-slate-100" : "hidden"
      }
      onClick={toggleMenu}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/gallery">
        Gallery
      </Link>
      <Link className="p-4" to="/testimonials">
        Testimonials
      </Link>
      <Link className="p-4" to="/donate">
        Donate
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;

import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleMenu }) => {
  return (
    <nav className="flex justify-between items-center h-20 bg-slate-300">
      <h1 className="ml-4 sm:text-2xl text-lg">The Bona Vias Foundation</h1>
      <div className="lg:hidden block" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <nav className="lg:block hidden">
        <Link className="p-3 hover:underline" to="/">
          Home
        </Link>
        <Link className="p-3 hover:underline" to="/about">
          About
        </Link>
        <Link className="p-3 hover:underline" to="/gallery">
          Gallery
        </Link>
        <Link className="p-3 hover:underline" to="/testimonials">
          Testimonials
        </Link>
        <Link className="p-3 hover:underline" to="/donate">
          Donate
        </Link>
        <Link className="p-3 mr-4 hover:underline" to="/contact">
          Contact
        </Link>
      </nav>
    </nav>
  );
};

export default Header;

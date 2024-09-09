// src/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./assets/MenuIconv";

export const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const toggleNavbar = (event) => {
    event.preventDefault();
    setNavbarIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="custom-z-index flex top-0 right-0 justify-end pr-8 sm:fixed sm:right-0 sm:top-0 p-4 text-neutral-900">
        <button
          onClick={toggleNavbar}
          className={`flex items-center transition-transform duration-300 ${
            navbarIsOpen ? "rotate-90" : ""
          }`}
        >
          <MenuIcon className="w-8 h-8" />
        </button>
      </nav>

      {navbarIsOpen && (
        <div className="min-h-24 md:absolute md:h-full md:top-20 md:right-20 flex-col uppercase">
          <div onClick={toggleNavbar}>
            <Link
              to="/"
              className=" text-center block py-2 hover:text-neutral-500"
            >
              Photography
            </Link>
          </div>
          <div onClick={toggleNavbar}>
            <Link
              to="/contact"
              className="text-center block py-2 hover:text-neutral-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

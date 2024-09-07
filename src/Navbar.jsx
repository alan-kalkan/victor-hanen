// src/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./assets/MenuIconv"; // Assure-toi que ce chemin est correct

export const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const toggleNavbar = (event) => {
    event.preventDefault();
    setNavbarIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="fixed right-0 top-0 p-4 text-neutral-900">
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
        <div className="fixed flex flex-col right-0 bottom-0 w-32 p-4 md:w-80 ">
          <div onClick={toggleNavbar}>
            <Link
              to="/contact"
              className="text-center block py-2 hover:text-neutral-500 hover:underline"
            >
              Contact
            </Link>
          </div>
          <div onClick={toggleNavbar}>
            <Link
              to="/"
              className="text-center block py-2 hover:text-neutral-500"
            >
              Photography
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

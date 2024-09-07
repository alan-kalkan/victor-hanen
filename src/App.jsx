import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import MenuIcon from './assets/MenuIconv';
import './index.css';
export default function App() {

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1
  };

  const images = [
    "sekhou5 3.jpg",
    "nass3-test_tache 3.jpg",
    "ROSE61 4.jpg",
    "angeleprint2.jpg",
    "isadora1_5.jpg",
    "armande1_finale_2.jpg",
    "ROSE9 2.jpg",
    "dustin1_finale.jpg",
    "NoelleNUM2 5.jpg",
    "self1_finale2.jpg",
    "teo6_2.jpg",
    "isadora1_6 2.jpg",
    "matthias6_3 2.jpg",
    "TEO.jpg",
    "isadora7_3.jpg",
    "sekhou6 2.jpg",
    "dustin6_2.jpg",
    "matthias5_1 2.jpg",
    "nassim2.jpg",
    "teo final 3 copie 2.jpg"
  ];

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const toggleNavbar = (event) => {
    event.preventDefault(); // Assure-toi que cette ligne est présente
    setNavbarIsOpen(prevState => !prevState);
  }

  return (
    <div className="main m-6">
      <nav className="fixed left-0 top-0 p-4 text-neutral-900">
        <button onClick={toggleNavbar} className={`flex items-center transition-transform duration-300 ${navbarIsOpen ? 'rotate-90' : ''}`}>
          <MenuIcon className="w-8 h-8" />
        </button>
      </nav>

      {/* Menu Toggle */}
      {navbarIsOpen && (
        <div className="fixed left-0 top-10 w-64 p-4 ">
          <a className=" py-2 hover:text-neutral-500 cursor-pointer">
            Contact
            <Link to={contact}>Contact</Link>
          </a>
          <a  className="block py-2 hover:text-neutral-500 cursor-pointer">
            Photography
          </a>
        </div>
      )}

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            className="max-w-xs h-auto mb-4"
            src={`src/assets/${image}`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </Masonry>
    </div>
  );
}
// src/Photography.js
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import PictureSlider from "./PictureSlider";
import useIsMobile from "./isMobileHook";

export const Photography = ({ setIsSliderOpen }) => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 1,
    700: 1,
  };

  const imagesLaptop = [
    "sekhou5 3.jpg",
    "nass3-test_tache 3.jpg",
    "ROSE61 4.jpg",
    "angeleprint2.jpg",
    "isadora1_5.jpg",
    "armande1_finale_2.jpg",
    "ROSE9 2.jpg",
    "dustin1_finale mise a jour.jpg",
    "NoelleNUM2 5.jpg",
    "self1_finale2.jpg",
    "teo6_2.jpg",
    "isadora1_6 2.jpg",
    "amande3 2.jpg",
    "matthias6_3 2.jpg",
    "TEO.jpg",
    "sekhou6 2.jpg",
    "isadora7_3.jpg",
    "matthias5_1 2.jpg",
    "ROSE1 5.jpg",
    "teo final 3 copie 2.jpg",
    "nassim2.jpg",
  ];
  const imagesMobile = [
    "nass3-test_tache 3.jpg",
    "sekhou5 3.jpg",
    "ROSE61 4.jpg",
    "isadora1_5.jpg",
    "armande1_finale_2.jpg",
    "self1_finale2.jpg",
    "ROSE9 2.jpg",
    "dustin1_finale mise a jour.jpg",
    "angeleprint2.jpg",
    "amande3 2.jpg",
    "nassim2.jpg",
    "NoelleNUM2 5.jpg",
    "teo6_2.jpg",
    "isadora1_6 2.jpg",
    "matthias6_3 2.jpg",
    "TEO.jpg",
    "sekhou6 2.jpg",
    "isadora7_3.jpg",
    "teo final 3 copie 2.jpg",
    "matthias5_1 2.jpg",
    "ROSE1 5.jpg",
  ];

  const [showSlider, setShowSlider] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = useIsMobile();
  const images = isMobile ? imagesMobile : imagesLaptop;

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setShowSlider(true);
    setIsSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
    setIsSliderOpen(false);
  };

  return (
    <div className="main flex justify-around sm:justify-start pt-8 sm:m-6">
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="sm:my-masonry-grid_column sm:p-2"
      >
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            className="max-w-21 sm:max-w-33 h-auto mb-4 cursor-pointer transition-transform duration-300 hover:brightness-90"
            onClick={() => handleImageClick(index)}
            src={`./assets/${image}`}
            alt={`Image ${index + 1}`}
          />
        ))}
      </Masonry>

      {showSlider && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
          <button
            onClick={handleCloseSlider}
            className="absolute top-4 right-4 text-white text-2xl z-50"
          >
            ×
          </button>
          <PictureSlider
            images={images}
            initialSlide={selectedIndex}
            onClose={handleCloseSlider}
          />
        </div>
      )}
    </div>
  );
};

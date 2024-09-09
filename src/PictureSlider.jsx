// src/PictureSlider.js
import React, { useEffect, useState } from "react";

const PictureSlider = ({ images, initialSlide, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialSlide);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    setTransitionClass("opacity-0 translate-x-10");
    const timeout = setTimeout(() => {
      setTransitionClass("opacity-100 translate-x-0");
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const nextSlide = () => {
    setTransitionClass("opacity-0 translate-x-10");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 300);
  };

  const prevSlide = () => {
    setTransitionClass("opacity-0 -translate-x-10");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, 300);
  };

  return (
    <>
      <button
        className="absolute bottom-7 top-2/3 md:top-8 md:bg-red-800 text-black p-2 z-50"
        onClick={onClose}
      >
        ×
      </button>
      <div className="relative sm:max-w-32 max-h-full flex justify-center items-center">
        {/* Close Button */}

        {/* Left Arrow */}
        <button
          className="absolute left-1 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full z-50"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        {/* Image with smooth transition */}
        <img
          src={`./assets/${images[currentIndex]}`}
          alt={`Slide ${currentIndex + 1}`}
          className={`max-w-full max-h-full object-contain p-8 transition-all duration-500 ease-in-out transform ${transitionClass}`}
        />

        {/* Right Arrow */}
        <button
          className="absolute right-1 top-1/2 transform -translate-y-1/2  text-black p-2 rounded-full z-50"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default PictureSlider;

// src/PictureSlider.jsx
import React from "react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PictureSlider = ({ images, initialSlide }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Swiper
        initialSlide={initialSlide}
        spaceBetween={30}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        autoHeight={true}
        centeredSlides={true}
        className="max-w-2xl items-center" // Centrer le slider et limiter la largeur maximale
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={`src/assets/${image}`}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PictureSlider;

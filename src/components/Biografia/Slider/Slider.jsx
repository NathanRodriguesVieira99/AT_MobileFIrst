import React, { useState, useEffect } from "react";
import "./Slider.scss";

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 4000; 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(timer); 
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slider__slide" key={index}>
            <img src={image.imgURL} alt={image.imgAlt} className="slider__image" />
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default Slider;

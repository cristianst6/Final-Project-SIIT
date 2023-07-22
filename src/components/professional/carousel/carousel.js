import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Carousel = () => {
  const slides = [
    {
      url: "/imgcarousel/image1.JPG",
    },
    {
      url: "/imgcarousel/image2.JPG",
    },
    {
      url: "/imgcarousel/image3.JPG",
    },
    {
      url: "/imgcarousel/image4.JPG",
    },
    {
      url: "imgcarousel/image5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[720px] h-[480px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounder-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <AiFillCaretLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <AiFillCaretRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Carousel;

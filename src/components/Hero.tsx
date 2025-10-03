"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  // ✅ Corrected paths
  const slides = ["/13.jpg", "/12.jpg", "/14.jpg", "/16.jpg"];
  const [current, setCurrent] = useState(0);

  // Auto Play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds autoplay
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slider Images */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={slide}
              alt={`slide-${index}`}
              fill
              priority={index === 0} // first image fast load
              className="object-cover"
            />
          </div>
        </motion.div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to HS Store
        </h1>
        <p className="text-lg mb-6">Shop the best deals today only</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <IoIosArrowBack size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <IoIosArrowForward size={28} />
      </button>
    </div>
  );
};

export default Hero;

"use client";
import React, { useState, useEffect } from "react";
import { FaHeart, FaStar, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  const [cart, setCart] = useState([]);

  // ✅ LocalStorage se cart load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Add to cart function
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  // 🔹 New Products
  const newProducts = [
    {
      id: 1,
      img: "https://st41653.ispot.cc/Uploads/202402251101221324562046.jpg",
      name: "DM HD1300 DUAL SSD CASE M.2+NVME ULTRA HIGH SPEED EDITION",
      price: "Rs.0",
    },
    {
      id: 2,
      img: "https://st41653.ispot.cc/Uploads/20240227102033778077528.jpg",
      name: "KTS Speaker KTS-1371 wireless outdoor speakers audio speaker",
      price: "Rs.0",
    },
    {
      id: 3,
      img: "https://st41653.ispot.cc/Uploads/202312191725081705656075.jpg",
      name: "Airox CH03 Turbo 2 Usb 2.4 A Mobile Charger || QC Approved | Fix cable",
      price: "Rs.0",
    },
    {
      id: 4,
      img: "https://st41653.ispot.cc/Uploads/202312200303151556746319.jpg",
      name: "Airox AC02 PD Car Adapter Charger Small Size Ultra Fast | 20WATT",
      price: "Rs.0",
    },
    {
      id: 5,
      img: "https://st41653.ispot.cc/Uploads/20231219173128770194239.jpg",
      name: "Airox CH14 Fast Mobile Charger for IPhone | TYPE C|2 USB Port",
      price: "Rs.0",
    },
  ];

  // 🔹 Best Selling Products
  const bestSelling = [
    {
      id: 6,
      img: "https://st41653.ispot.cc/Uploads/20240226000137956759073.jpg",
      name: "HP x306w USB 3.2 Flash Drives",
      price: "Rs.0",
    },
    {
      id: 7,
      img: "https://st41653.ispot.cc/Uploads/202402251012361595354737.jpg",
      name: "BOYA BY-CM6 USB Condenser Microphone ",
      price: "Rs.0",
    },
    {
      id: 8,
      img: "https://st41653.ispot.cc/Uploads/202402192319151553020134.jpg",
      name: "JOyroom S-CL020A12 1.2Meter 20W Type-C",
      price: "Rs.0",
    },
    {
      id: 9,
      img: "https://st41653.ispot.cc/Uploads/20240313213400113448868.jpg",
      name: "Andriod | Micro Loot cable 1meter",
      price: "Rs.0",
    },
    {
      id: 10,
      img: "https://st41653.ispot.cc/Uploads/202401240546111549907870.jpg",
      name: "T800 Ultra  Smart Watch Ultra",
      price: "Rs.0",
    },
  ];

  // 🔹 Product Card with Animation
  const ProductCard = ({ product }) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Wishlist */}
      <div className="flex justify-end mb-2">
        <FaHeart className="bg-white p-2 text-gray-400 hover:text-red-500 shadow rounded-full text-3xl cursor-pointer transition" />
      </div>

      {/* Product Image */}
      <div className="relative group">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={product.img}
          alt={product.name}
          className="w-56 h-56 object-contain mx-auto"
        />
        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                     opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
                     translate-y-3 transition-all duration-300 
                     px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 
                     text-white font-medium rounded-lg shadow-md"
        >
          Add to Cart
        </motion.button>
      </div>

      {/* Product Info */}
      <h1 className="font-semibold mt-4 text-gray-800 text-sm line-clamp-2 min-h-[40px]">
        {product.name}
      </h1>
      <p className="text-orange-600 font-bold text-left pl-1 mt-2">
        {product.price}
      </p>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-400" />
        <p className="text-gray-500 text-sm ml-2">(0 reviews)</p>
      </div>
    </motion.div>
  );

  // 🔹 Section Component with animation
  const Section = ({ title, link, products }) => (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-between items-center px-6 mt-12 mb-6"
      >
        <h1 className="text-3xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
          {title}
        </h1>
        <a
          href={link}
          className="flex items-center text-lg text-orange-600 hover:underline"
        >
          <span>View All</span>
          <FaArrowRight className="ml-2" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );

  return (
    <>
      <Section title="New Products" link="/all" products={newProducts} />
      <Section
        title="Best Selling Products"
        link="/best_seilling"
        products={bestSelling}
      />
      <Section
        title="All Products"
        link="/Allproducts"
        products={[...newProducts, ...bestSelling]}
      />
    </>
  );
}

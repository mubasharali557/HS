"use client";
import React, { useState, useEffect } from "react";
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

function Page() {
  const [cart, setCart] = useState([]);

  const products = [
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

  // ✅ Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // ✅ Add to Cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <h1 className="text-4xl font-bold px-7 my-10 text-gray-800 border-l-4 border-orange-500 pl-3">
        New Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {products.map((i) => (
          <div
            key={i.id}
            className="group bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Wishlist */}
            <div className="flex justify-end">
              <FaHeart className="bg-white p-2 text-gray-400 hover:text-red-500 shadow rounded-full text-2xl cursor-pointer transition" />
            </div>

            {/* Product Image */}
            <div className="relative group">
              <img
                src={i.img}
                alt={i.name}
                className="w-56 h-56 object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Add to Cart Button */}
              <button
                onClick={() => addToCart(i)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 
                  bg-gradient-to-r from-orange-500 to-red-500 text-white 
                  rounded-lg px-5 py-2 opacity-0 group-hover:opacity-100 
                  translate-y-4 group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out shadow-md hover:scale-105"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Info */}
            <h1 className="font-semibold mt-4 text-sm text-gray-800 line-clamp-2 min-h-[40px]">
              {i.name}
            </h1>
            <p className="text-orange-600 font-bold text-left pl-2 mt-2">{i.price}</p>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400" />
              <p className="text-gray-500 text-sm ml-2">(0 reviews)</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Floating Cart Button */}
      <a
        href="/cart"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white 
                   w-14 h-14 flex items-center justify-center rounded-full shadow-lg 
                   hover:scale-110 transition-transform duration-300"
      >
        <FaShoppingCart className="text-2xl" />
        {cart.length > 0 && (
          <span className="absolute top-2 right-2 bg-white text-orange-600 text-xs font-bold 
                           w-6 h-6 flex items-center justify-center rounded-full shadow-md">
            {cart.length}
          </span>
        )}
      </a>
    </>
  );
}

export default Page;

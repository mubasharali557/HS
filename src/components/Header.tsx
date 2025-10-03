"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="w-full bg-gray-900 py-4 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto bg-gray-900 border border-yellow-400 rounded-2xl px-6 py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        
        {/* Left: Logo + Text */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <Image
            src="/logo.jpg"
            alt="HS Logo"
            width={50}
            height={50}
            className="rounded-full border-2 border-yellow-400"
          />
          <div className="text-white leading-tight">
            <h1 className="text-lg font-bold text-yellow-400">HS</h1>
            <p className="text-sm text-gray-300">Electric Store</p>
          </div>
        </div>

        {/* Center: Search + Nav Links */}
        <div className="flex flex-col items-center w-full">
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-md border border-yellow-400 rounded-full px-4 py-2 bg-gray-800">
            <FaSearch className="text-yellow-400 mr-2" />
            <input
              type="text"
              placeholder="Search for Electric Products.."
              className="w-full text-sm text-white bg-transparent placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Navigation */}
          <div className="flex space-x-6 mt-2 text-white text-sm font-medium">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-yellow-400 transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Cart Icon */}
        <div className="flex justify-center md:justify-end relative">
          <Link
            href="/cart"
            className="text-yellow-400 text-2xl hover:text-yellow-300 transition relative"
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

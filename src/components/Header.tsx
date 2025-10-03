// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaSearch, FaShoppingCart } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className="w-full bg-gray-900 py-4 px-4 shadow-md">
//       <div className="max-w-7xl mx-auto bg-gray-900 border border-yellow-400 rounded-2xl px-6 py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        
//         {/* Left: Search Bar */}
//         <div className="flex justify-center md:justify-start">
//           <div className="flex items-center w-full max-w-sm border border-yellow-400 rounded-full px-4 py-2 bg-gray-800">
//             <FaSearch className="text-yellow-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Search for Electric Products.."
//               className="w-full text-sm text-white bg-transparent placeholder-gray-400 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* Center: Logo + Nav */}
//         <div className="flex flex-col items-center">
//           <Image
//             src="/logo.jpg"
//             alt="HS Logo"
//             width={45}
//             height={45}
//             className="rounded-full border-2 border-yellow-400 mb-1"
//           />
//           <div className="flex space-x-6 text-white text-sm font-medium mt-1">
//             <Link href="/" className="hover:text-yellow-400 transition-colors">
//               Home
//             </Link>
//             <Link href="/products" className="hover:text-yellow-400 transition-colors">
//               Products
//             </Link>
//           </div>
//         </div>

//         {/* Right: Cart Button */}
//         <div className="flex justify-center md:justify-end">
//           <Link
//             href="/cart"
//             className="flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             <FaShoppingCart />
//             <span>Add to Cart</span>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  // Placeholder cart count, replace with actual cart logic
  const cartCount = 2;

  return (
    <header className="w-full bg-gray-900 py-4 px-4 shadow-md">
      <div className="max-w-7xl mx-auto bg-gray-900 border border-yellow-400 rounded-2xl px-6 py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        
        {/* Left: Logo and Text */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <Image
            src="/logo.jpg"
            alt="HS Logo"
            width={45}
            height={45}
            className="rounded-full border-2 border-yellow-400"
          />
          <div className="text-white leading-tight">
            <h1 className="text-lg font-bold text-yellow-400">HS</h1>
            <p className="text-sm text-gray-300">Electric Store</p>
          </div>
        </div>

        {/* Center: Search + Navigation */}
        <div className="flex flex-col items-center w-full">
          {/* Search */}
          <div className="flex items-center w-full max-w-md border border-yellow-400 rounded-full px-4 py-2 bg-gray-800">
            <FaSearch className="text-yellow-400 mr-2" />
            <input
              type="text"
              placeholder="Search for Electric Products.."
              className="w-full text-sm text-white bg-transparent placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* Nav Links */}
          <div className="flex space-x-6 mt-2 text-white text-sm font-medium">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-yellow-400 transition-colors">
              Products
            </Link>
          </div>
        </div>

        {/* Right: Cart Icon */}
        <div className="flex justify-center md:justify-end relative">
          <Link
            href="/cart"
            className="text-yellow-400 text-xl hover:text-yellow-300 transition relative"
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
// // // // // "use client";

// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import { Navigation } from "swiper/modules";
// // // // // import "swiper/css";
// // // // // import "swiper/css/navigation";
// // // // // import Image from "next/image";

// // // // // const categories = [
// // // // //   { name: "Adapt & Charge", img: "/be9.jpg" },
// // // // //   { name: "Buds & Pods", img: "/be9.jpg" },
// // // // //   { name: "Audio Gear", img: "/be9.jpg" },
// // // // //   { name: "Accessories", img: "/be9.jpg" },
// // // // //   { name: "Smart watch", img: "/be9.jpg" },
// // // // //   { name: "Power Banks", img: "/be9.jpg" },
// // // // //   { name: "Headphones", img: "/be9.jpg" },
// // // // //   { name: "Batteries", img: "/be9.jpg" },
// // // // //   { name: "Multimedia", img: "/be9.jpg" },
// // // // //   { name: "Handsfree", img: "/be9.jpg" },
// // // // //   { name: "Cables", img: "/be9.jpg" },
// // // // //   { name: "PC/Laptop Upgrades", img: "/be9.jpg" },
// // // // // ];

// // // // // export default function CategorySlider() {
// // // // //   return (
// // // // //     <div className="max-w-7xl mx-auto px-6 py-6">
// // // // //       {/* Header */}
// // // // //       <div className="flex justify-between items-center mb-4">
// // // // //         <h2 className="text-xl font-bold">Category</h2>
// // // // //         <a href="#" className="text-sm text-blue-600 hover:underline">
// // // // //           View All →
// // // // //         </a>
// // // // //       </div>

// // // // //       {/* Slider */}
// // // // //       <Swiper
// // // // //         modules={[Navigation]}
// // // // //         spaceBetween={15}
// // // // //         slidesPerView={6}
// // // // //         navigation={true}
// // // // //         breakpoints={{
// // // // //           320: { slidesPerView: 2 },
// // // // //           640: { slidesPerView: 3 },
// // // // //           768: { slidesPerView: 4 },
// // // // //           1024: { slidesPerView: 6 },
// // // // //         }}
// // // // //       >
// // // // //         {categories.map((cat, index) => (
// // // // //           <SwiperSlide key={index}>
// // // // //             <div className="border rounded-md shadow-sm flex flex-col items-center p-4 cursor-pointer hover:shadow-lg transition">
// // // // //               <Image
// // // // //                 src={cat.img}
// // // // //                 alt={cat.name}
// // // // //                 width={60}
// // // // //                 height={60}
// // // // //                 className="object-contain mb-2"
// // // // //               />
// // // // //               <p className="text-sm font-medium text-center">{cat.name}</p>
// // // // //             </div>
// // // // //           </SwiperSlide>
// // // // //         ))}
// // // // //       </Swiper>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // "use client";

// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import { Navigation } from "swiper/modules";
// // // // import "swiper/css";
// // // // import "swiper/css/navigation";
// // // // import Image from "next/image";

// // // // const categories = [
// // // //   { name: "Adapt & Charge", img: "/be9.jpg" },
// // // //   { name: "Buds & Pods", img: "/be9.jpg" },
// // // //   { name: "Audio Gear", img: "/be9.jpg" },
// // // //   { name: "Accessories", img: "/be9.jpg" },
// // // //   { name: "Smart watch", img: "/be9.jpg" },
// // // //   { name: "Power Banks", img: "/be9.jpg" },
// // // //   { name: "Headphones", img: "/be9.jpg" },
// // // //   { name: "Batteries", img: "/be9.jpg" },
// // // //   { name: "Multimedia", img: "/be9.jpg" },
// // // //   { name: "Handsfree", img: "/be9.jpg" },
// // // //   { name: "Cables", img: "/be9.jpg" },
// // // //   { name: "PC/Laptop Upgrades", img: "/be9.jpg" },
// // // // ];

// // // // export default function CategorySlider() {
// // // //   return (
// // // //     <div className="max-w-7xl mx-auto px-6 py-10">
// // // //       {/* Header */}
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
// // // //           Categories
// // // //         </h2>
// // // //         <a
// // // //           href="#"
// // // //           className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
// // // //         >
// // // //           View All →
// // // //         </a>
// // // //       </div>

// // // //       {/* Slider */}
// // // //       <Swiper
// // // //         modules={[Navigation]}
// // // //         spaceBetween={20}
// // // //         slidesPerView={6}
// // // //         navigation={true}
// // // //         breakpoints={{
// // // //           320: { slidesPerView: 2 },
// // // //           640: { slidesPerView: 3 },
// // // //           768: { slidesPerView: 4 },
// // // //           1024: { slidesPerView: 6 },
// // // //         }}
// // // //       >
// // // //         {categories.map((cat, index) => (
// // // //           <SwiperSlide key={index}>
// // // //             <div className="group border rounded-xl shadow-sm bg-white hover:bg-blue-50 flex flex-col items-center p-5 cursor-pointer hover:shadow-xl transition-all duration-300">
// // // //               <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-blue-100 transition">
// // // //                 <Image
// // // //                   src={cat.img}
// // // //                   alt={cat.name}
// // // //                   width={60}
// // // //                   height={60}
// // // //                   className="object-contain"
// // // //                 />
// // // //               </div>
// // // //               <p className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-blue-600 text-center">
// // // //                 {cat.name}
// // // //               </p>
// // // //             </div>
// // // //           </SwiperSlide>
// // // //         ))}
// // // //       </Swiper>
// // // //     </div>
// // // //   );
// // // // }



// // // "use client";

// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Navigation } from "swiper/modules";
// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import Image from "next/image";

// // // const categories = [
// // //   { name: "Adapt & Charge", img: "/be9.jpg" },
// // //   { name: "Buds & Pods", img: "/be9.jpg" },
// // //   { name: "Audio Gear", img: "/be9.jpg" },
// // //   { name: "Accessories", img: "/be9.jpg" },
// // //   { name: "Smart watch", img: "/be9.jpg" },
// // //   { name: "Power Banks", img: "/be9.jpg" },
// // //   { name: "Headphones", img: "/be9.jpg" },
// // //   { name: "Batteries", img: "/be9.jpg" },
// // //   { name: "Multimedia", img: "/be9.jpg" },
// // //   { name: "Handsfree", img: "/be9.jpg" },
// // //   { name: "Cables", img: "/be9.jpg" },
// // //   { name: "PC/Laptop Upgrades", img: "/be9.jpg" },
// // // ];

// // // export default function CategorySlider() {
// // //   return (
// // //     <div className="max-w-7xl mx-auto px-6 py-12">
// // //       {/* Header */}
// // //       <div className="flex justify-between items-center mb-8">
// // //         <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
// // //           Explore Categories
// // //         </h2>
// // //         <a
// // //           href="#"
// // //           className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:underline"
// // //         >
// // //           View All →
// // //         </a>
// // //       </div>

// // //       {/* Slider */}
// // //       <Swiper
// // //         modules={[Navigation]}
// // //         spaceBetween={20}
// // //         slidesPerView={6}
// // //         navigation={true}
// // //         breakpoints={{
// // //           320: { slidesPerView: 2 },
// // //           640: { slidesPerView: 3 },
// // //           768: { slidesPerView: 4 },
// // //           1024: { slidesPerView: 6 },
// // //         }}
// // //       >
// // //         {categories.map((cat, index) => (
// // //           <SwiperSlide key={index}>
// // //             <div className="group backdrop-blur-md bg-white/40 border border-white/20 rounded-2xl shadow-lg flex flex-col items-center p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300">
// // //               <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 shadow-md">
// // //                 <Image
// // //                   src={cat.img}
// // //                   alt={cat.name}
// // //                   width={55}
// // //                   height={55}
// // //                   className="object-contain drop-shadow-lg"
// // //                 />
// // //               </div>
// // //               <p className="mt-3 text-sm font-semibold text-gray-800 group-hover:text-purple-600 text-center">
// // //                 {cat.name}
// // //               </p>
// // //             </div>
// // //           </SwiperSlide>
// // //         ))}
// // //       </Swiper>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import Image from "next/image";
// // import { motion } from "framer-motion";

// // const categories = [
// //   { name: "Adapt & Charge", img: "/be9.jpg" },
// //   { name: "Buds & Pods", img: "/be9.jpg" },
// //   { name: "Audio Gear", img: "/be9.jpg" },
// //   { name: "Accessories", img: "/be9.jpg" },
// //   { name: "Smart watch", img: "/be9.jpg" },
// //   { name: "Power Banks", img: "/be9.jpg" },
// //   { name: "Headphones", img: "/be9.jpg" },
// //   { name: "Batteries", img: "/be9.jpg" },
// //   { name: "Multimedia", img: "/be9.jpg" },
// //   { name: "Handsfree", img: "/be9.jpg" },
// //   { name: "Cables", img: "/be9.jpg" },
// //   { name: "PC/Laptop Upgrades", img: "/be9.jpg" },
// // ];

// // export default function CategorySlider() {
// //   return (
// //     <div className="max-w-7xl mx-auto px-6 py-12">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-8">
// //         <h2 className="text-3xl font-extrabold bg-gradient-to-r from-black to-black text-transparent bg-clip-text  hover:from-blue-500 hover:to-purple-600 hover:cursor-pointer ">
// //          Category
// //         </h2>
// //         <a
// //           href="Allcategories"
// //           className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:underline"
// //         >
// //           View All →
// //         </a>
// //       </div>

// //       {/* Slider */}
// //       <Swiper
// //         modules={[Navigation]}
// //         spaceBetween={20}
// //         slidesPerView={6}
// //         navigation={true}
// //         breakpoints={{
// //           320: { slidesPerView: 2 },
// //           640: { slidesPerView: 3 },
// //           768: { slidesPerView: 4 },
// //           1024: { slidesPerView: 6 },
// //         }}
// //       >
// //         {categories.map((cat, index) => (
// //           <SwiperSlide key={index}>
// //             <div className="group backdrop-blur-md bg-white/40 border border-white/20 rounded-2xl shadow-lg flex flex-col items-center p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300">
              
// //               {/* Image with animation */}
// //               <motion.div
// //                 whileHover={{ scale: 1.2, rotate: 10 }}
// //                 transition={{ type: "spring", stiffness: 200, damping: 10 }}
// //                 className="w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 shadow-md"
// //               >
// //                 <motion.div
// //                   animate={{ y: [0, -6, 0] }}
// //                   transition={{ repeat: Infinity, duration: 2 }}
// //                 >
// //                   <Image
// //                     src={cat.img}
// //                     alt={cat.name}
// //                     width={55}
// //                     height={55}
// //                     className="object-contain drop-shadow-lg"
// //                   />
// //                 </motion.div>
// //               </motion.div>

// //               {/* Text */}
// //               <p className="mt-3 text-sm font-semibold text-gray-800 group-hover:text-purple-600 text-center">
// //                 {cat.name}
// //               </p>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>



// // <div>
// // </div>











// //     </div>
// //   );
// // }






// // "use client";
// // import React from "react";
// // import { FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

// // export default function Page() {
// //   // New Products
// //   const newProducts = [
// //     {
// //       id: 1,
// //       img: "https://st41653.ispot.cc/Uploads/202402251101221324562046.jpg",
// //       name: "DM HD1300 DUAL SSD CASE M.2+NVME ULTRA HIGH SPEED EDITION",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 2,
// //       img: "https://st41653.ispot.cc/Uploads/20240227102033778077528.jpg",
// //       name: "KTS Speaker KTS-1371 wireless outdoor speakers audio speaker",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 3,
// //       img: "https://st41653.ispot.cc/Uploads/202312191725081705656075.jpg",
// //       name: "Airox CH03 Turbo 2 Usb 2.4 A Mobile Charger || QC Approved | Fix cable",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 4,
// //       img: "https://st41653.ispot.cc/Uploads/202312200303151556746319.jpg",
// //       name: "Airox AC02 PD Car Adapter Charger Small Size Ultra Fast | 20WATT",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 5,
// //       img: "https://st41653.ispot.cc/Uploads/20231219173128770194239.jpg",
// //       name: "Airox CH14 Fast Mobile Charger for IPhone | TYPE C|2 USB Port",
// //       price: "Rs.0",
// //     },
// //   ];

// //   // Best Selling Products
// //   const bestSelling = [
// //     {
// //       id: 1,
// //       img: "https://st41653.ispot.cc/Uploads/20240226000137956759073.jpg",
// //       name: "HP x306w USB 3.2 Flash Drives",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 2,
// //       img: "https://st41653.ispot.cc/Uploads/202402251012361595354737.jpg",
// //       name: "BOYA BY-CM6 USB Condenser Microphone ",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 3,
// //       img: "https://st41653.ispot.cc/Uploads/202402192319151553020134.jpg",
// //       name: "JOyroom S-CL020A12 1.2Meter 20W Type-C",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 4,
// //       img: "https://st41653.ispot.cc/Uploads/20240313213400113448868.jpg",
// //       name: "Andriod | Micro Loot cable 1meter",
// //       price: "Rs.0",
// //     },
// //     {
// //       id: 5,
// //       img: "https://st41653.ispot.cc/Uploads/202401240546111549907870.jpg",
// //       name: "T800 Ultra  Smart Watch Ultra",
// //       price: "Rs.0",
// //     },
// //   ];

// //   // Product Card Component
// //   const ProductCard = ({ product }) => (
// //     <div
// //       key={product.id}
// //       className="bg-white shadow-2xl border hover:shadow-black rounded-3xl p-4 text-center"
// //     >
// //       <div className="flex justify-end">
// //         <FaHeart className="bg-white shadow-2xl hover:text-red-500 rounded-full text-2xl" />
// //       </div>
// //       <img src={product.img} alt={product.name} className="w-60 h-55 mx-auto" />
// //       <h1 className="font-semibold mt-2">{product.name}</h1>
// //       <p className="text-black font-bold text-left pl-2 mb-3">{product.price}</p>
// //       <div>
// //         <FaStar className="hover:text-red-500" />
// //         <p className="text-left pl-5 mt-[-20px]">(0 reviews)</p>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <>
// //       {/* 🔹 New Products Section */}
// //       <div className="flex justify-between items-center px-6 mt-10">
// //         <h1 className="text-3xl font-bold">New Products</h1>
// //         <a href="/all" className="flex items-center text-lg text-black">
// //           <button>View All</button>
// //           <FaArrowRight className="ml-2" />
// //         </a>
// //       </div>
// //       <div className="grid grid-cols-5 gap-6 p-6 w-auto">
// //         {newProducts.map((item) => (
// //           <ProductCard key={item.id} product={item} />
// //         ))}
// //       </div>

// //       {/* 🔹 Best Selling Section */}
// // <div className="flex justify-between items-center px-6 mt-10">
// //         <h1 className="text-3xl font-bold">Best Selling Products</h1>
// //         <a href="/best_seilling" className="flex items-center text-lg text-black">
// //           <button>View All</button>
// //           <FaArrowRight className="ml-2" />
// //         </a>
// //       </div>
// //             <div className="grid grid-cols-5 gap-6 p-6 w-auto">
// //         {bestSelling.map((item) => (
// //           <ProductCard key={item.id} product={item} />
// //         ))}
// //       </div>
// //       <div className="flex justify-between items-center px-6 mt-10">
// //         <h1 className="text-3xl font-bold">All Products</h1>
// //         <a href="/Allproducts" className="flex items-center text-lg text-black">
// //           <button>View All</button>
// //           <FaArrowRight className="ml-2" />
// //         </a>
// //       </div>
// //             <div className="grid grid-cols-5 gap-6 p-6 w-auto">
// //         {bestSelling.map((item) => (
// //           <ProductCard key={item.id} product={item} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }




// "use client";
// import React, { useState } from "react";
// import { FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

// export default function Page() {
//   const [cart, setCart] = useState([]);

//   // Add to cart function
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     console.log("🛒 Cart:", [...cart, product]);
//   };

//   // New Products
//   const newProducts = [
//     {
//       id: 1,
//       img: "https://st41653.ispot.cc/Uploads/202402251101221324562046.jpg",
//       name: "DM HD1300 DUAL SSD CASE M.2+NVME ULTRA HIGH SPEED EDITION",
//       price: "Rs.0",
//     },
//     {
//       id: 2,
//       img: "https://st41653.ispot.cc/Uploads/20240227102033778077528.jpg",
//       name: "KTS Speaker KTS-1371 wireless outdoor speakers audio speaker",
//       price: "Rs.0",
//     },
//     {
//       id: 3,
//       img: "https://st41653.ispot.cc/Uploads/202312191725081705656075.jpg",
//       name: "Airox CH03 Turbo 2 Usb 2.4 A Mobile Charger || QC Approved | Fix cable",
//       price: "Rs.0",
//     },
//     {
//       id: 4,
//       img: "https://st41653.ispot.cc/Uploads/202312200303151556746319.jpg",
//       name: "Airox AC02 PD Car Adapter Charger Small Size Ultra Fast | 20WATT",
//       price: "Rs.0",
//     },
//     {
//       id: 5,
//       img: "https://st41653.ispot.cc/Uploads/20231219173128770194239.jpg",
//       name: "Airox CH14 Fast Mobile Charger for IPhone | TYPE C|2 USB Port",
//       price: "Rs.0",
//     },
//   ];

//   // Best Selling Products
//   const bestSelling = [
//     {
//       id: 1,
//       img: "https://st41653.ispot.cc/Uploads/20240226000137956759073.jpg",
//       name: "HP x306w USB 3.2 Flash Drives",
//       price: "Rs.0",
//     },
//     {
//       id: 2,
//       img: "https://st41653.ispot.cc/Uploads/202402251012361595354737.jpg",
//       name: "BOYA BY-CM6 USB Condenser Microphone ",
//       price: "Rs.0",
//     },
//     {
//       id: 3,
//       img: "https://st41653.ispot.cc/Uploads/202402192319151553020134.jpg",
//       name: "JOyroom S-CL020A12 1.2Meter 20W Type-C",
//       price: "Rs.0",
//     },
//     {
//       id: 4,
//       img: "https://st41653.ispot.cc/Uploads/20240313213400113448868.jpg",
//       name: "Andriod | Micro Loot cable 1meter",
//       price: "Rs.0",
//     },
//     {
//       id: 5,
//       img: "https://st41653.ispot.cc/Uploads/202401240546111549907870.jpg",
//       name: "T800 Ultra  Smart Watch Ultra",
//       price: "Rs.0",
//     },
//   ];

//   // Product Card Component
//   const ProductCard = ({ product }) => (
//     <div
//       key={product.id}
//       className="bg-white shadow-2xl border hover:shadow-black rounded-3xl p-4 text-center"
//     >
//       <div className="flex justify-end">
//         <FaHeart className="bg-white shadow-2xl hover:text-red-500 rounded-full text-2xl" />
//       </div>
//       <img src={product.img} alt={product.name} className="w-60 h-55 mx-auto" />
//       <h1 className="font-semibold mt-2">{product.name}</h1>
//       <p className="text-black font-bold text-left pl-2 mb-3">{product.price}</p>
//       <div>
//         <FaStar className="hover:text-red-500" />
//         <p className="text-left pl-5 mt-[-20px]">(0 reviews)</p>
//       </div>
//       {/* Add to Cart Button */}
//       <button
//         onClick={() => addToCart(product)}
//         className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );

//   return (
//     <>
//       {/* 🔹 New Products Section */}
//       <div className="flex justify-between items-center px-6 mt-10">
//         <h1 className="text-3xl font-bold">New Products</h1>
//         <a href="/all" className="flex items-center text-lg text-black">
//           <button>View All</button>
//           <FaArrowRight className="ml-2" />
//         </a>
//       </div>
//       <div className="grid grid-cols-5 gap-6 p-6 w-auto">
//         {newProducts.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>

//       {/* 🔹 Best Selling Section */}
//       <div className="flex justify-between items-center px-6 mt-10">
//         <h1 className="text-3xl font-bold">Best Selling Products</h1>
//         <a href="/best_seilling" className="flex items-center text-lg text-black">
//           <button>View All</button>
//           <FaArrowRight className="ml-2" />
//         </a>
//       </div>
//       <div className="grid grid-cols-5 gap-6 p-6 w-auto">
//         {bestSelling.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>

//       {/* 🔹 All Products Section (abhi bestSelling ko hi reuse kiya hai) */}
//       <div className="flex justify-between items-center px-6 mt-10">
//         <h1 className="text-3xl font-bold">All Products</h1>
//         <a href="/Allproducts" className="flex items-center text-lg text-black">
//           <button>View All</button>
//           <FaArrowRight className="ml-2" />
//         </a>
//       </div>
//       <div className="grid grid-cols-5 gap-6 p-6 w-auto">
//         {bestSelling.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>

//       {/* Cart Debugging */}
//       <div className="p-6">
//         <h2 className="text-xl font-bold">🛒 Cart Items: {cart.length}</h2>
//       </div>
//     </>
//   );
// }





"use client";
import React, { useState } from "react";
import { FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

export default function Page() {
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("🛒 Cart:", [...cart, product]);
  };

  // New Products
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

  // Best Selling Products
  const bestSelling = [
    {
      id: 1,
      img: "https://st41653.ispot.cc/Uploads/20240226000137956759073.jpg",
      name: "HP x306w USB 3.2 Flash Drives",
      price: "Rs.0",
    },
    {
      id: 2,
      img: "https://st41653.ispot.cc/Uploads/202402251012361595354737.jpg",
      name: "BOYA BY-CM6 USB Condenser Microphone ",
      price: "Rs.0",
    },
    {
      id: 3,
      img: "https://st41653.ispot.cc/Uploads/202402192319151553020134.jpg",
      name: "JOyroom S-CL020A12 1.2Meter 20W Type-C",
      price: "Rs.0",
    },
    {
      id: 4,
      img: "https://st41653.ispot.cc/Uploads/20240313213400113448868.jpg",
      name: "Andriod | Micro Loot cable 1meter",
      price: "Rs.0",
    },
    {
      id: 5,
      img: "https://st41653.ispot.cc/Uploads/202401240546111549907870.jpg",
      name: "T800 Ultra  Smart Watch Ultra",
      price: "Rs.0",
    },
  ];

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div
      key={product.id}
      className="group relative bg-white shadow-2xl border hover:shadow-black rounded-3xl p-4 text-center transition"
    >
      <div className="flex justify-end">
        <FaHeart className="bg-white shadow-2xl hover:text-red-500 rounded-full text-2xl" />
      </div>

      {/* Product Image with zoom effect */}
      <img
        src={product.img}
        alt={product.name}
        className="w-60 h-55 mx-auto transition-transform duration-300 group-hover:scale-105"
      />

      <h1 className="font-semibold mt-2">{product.name}</h1>
      <p className="text-black font-bold text-left pl-2 mb-3">{product.price}</p>

      <div>
        <FaStar className="hover:text-red-500" />
        <p className="text-left pl-5 mt-[-20px]">(0 reviews)</p>
      </div>

      {/* 🔹 Add to Cart Button (hover par show) */}
      <button
        onClick={() => addToCart(product)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                   opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
                   translate-y-3 transition-all duration-300 
                   px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <>
      {/* 🔹 New Products Section */}
      <div className="flex justify-between items-center px-6 mt-10">
        <h1 className="text-3xl font-bold">New Products</h1>
        <a href="/all" className="flex items-center text-lg text-black">
          <button>View All</button>
          <FaArrowRight className="ml-2" />
        </a>
      </div>
      <div className="grid grid-cols-5 gap-6 p-6 w-auto">
        {newProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* 🔹 Best Selling Section */}
      <div className="flex justify-between items-center px-6 mt-10">
        <h1 className="text-3xl font-bold">Best Selling Products</h1>
        <a href="/best_seilling" className="flex items-center text-lg text-black">
          <button>View All</button>
          <FaArrowRight className="ml-2" />
        </a>
      </div>
      <div className="grid grid-cols-5 gap-6 p-6 w-auto">
        {bestSelling.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* 🔹 All Products Section */}
      <div className="flex justify-between items-center px-6 mt-10">
        <h1 className="text-3xl font-bold">All Products</h1>
        <a href="/Allproducts" className="flex items-center text-lg text-black">
          <button>View All</button>
          <FaArrowRight className="ml-2" />
        </a>
      </div>
      <div className="grid grid-cols-5 gap-6 p-6 w-auto">
        {bestSelling.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Cart Debugging */}
      <div className="p-6">
        <h2 className="text-xl font-bold">🛒 Cart Items: {cart.length}</h2>
      </div>
    </>
  );
}

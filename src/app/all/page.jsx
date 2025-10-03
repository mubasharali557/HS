// "use client";
// import React, { useState } from "react";
// import { FaHeart, FaStar } from "react-icons/fa";

// function Page() {
//   const [cart, setCart] = useState([]);

//   const products = [
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
//     {
//       id: 6,
//       img: "https://st41653.ispot.cc/Uploads/20240226000137956759073.jpg",
//       name: "HP x306w USB 3.2 Flash Drives",
//       price: "Rs.0",
//     },
//     {
//       id: 7,
//       img: "https://st41653.ispot.cc/Uploads/202402251012361595354737.jpg",
//       name: "BOYA BY-CM6 USB Condenser Microphone ",
//       price: "Rs.0",
//     },
//     {
//       id: 8,
//       img: "https://st41653.ispot.cc/Uploads/202402192319151553020134.jpg",
//       name: "JOyroom S-CL020A12 1.2Meter 20W Type-C",
//       price: "Rs.0",
//     },
//     {
//       id: 9,
//       img: "https://st41653.ispot.cc/Uploads/20240313213400113448868.jpg",
//       name: "Andriod | Micro Loot cable 1meter",
//       price: "Rs.0",
//     },
//     {
//       id: 10,
//       img: "https://st41653.ispot.cc/Uploads/202401240546111549907870.jpg",
//       name: "T800 Ultra  Smart Watch Ultra",
//       price: "Rs.0",
//     },
//   ];

//   // Add to Cart Function
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <>
//       <h1 className="text-4xl font-bold pl-7 my-10">New Products</h1>
//       <div className="grid grid-cols-5 gap-6 p-6 w-auto">
//         {products.map((i) => (
//           <div
//             key={i.id}
//             className="bg-white shadow-2xl border hover:shadow-black rounded-3xl p-4 text-center"
//           >
//             <div className="pl-42">
//               <FaHeart className="bg-white shadow-2xl hover:text-red-500 rounded-full text-2xl" />
//             </div>
//             <img src={i.img} alt={i.name} className="w-60 h-55 mx-auto " />
//             <h1 className="font-semibold mt-2">{i.name}</h1>
//             <p className="text-black font-bold text-left pl-2 mb-3">{i.price}</p>

//             <div>
//               <FaStar className="hover:text-red-500" />
//               <p className="text-left pl-5 mt-[-20px]">(0 reviews)</p>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addToCart(i)}
//               className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg w-full transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="p-6 mt-10 bg-gray-100 rounded-xl">
//         <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
//         {cart.length === 0 ? (
//           <p className="text-gray-500">Cart is empty</p>
//         ) : (
//           <ul className="list-disc pl-6 space-y-2">
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.name} - <span className="font-bold">{item.price}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }

// export default Page;



// "use client";
// import React, { useState } from "react";
// import { FaHeart, FaStar } from "react-icons/fa";

// function Page() {
//   const [cart, setCart] = useState([]);

//   const products = [
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
//     {
//       id: 6,
//       img: "https://st41653.ispot.cc/Uploads/20240226000137956759073.jpg",
//       name: "HP x306w USB 3.2 Flash Drives",
//       price: "Rs.0",
//     },
//     {
//       id: 7,
//       img: "https://st41653.ispot.cc/Uploads/202402251012361595354737.jpg",
//       name: "BOYA BY-CM6 USB Condenser Microphone ",
//       price: "Rs.0",
//     },
//     {
//       id: 8,
//       img: "https://st41653.ispot.cc/Uploads/202402192319151553020134.jpg",
//       name: "JOyroom S-CL020A12 1.2Meter 20W Type-C",
//       price: "Rs.0",
//     },
//     {
//       id: 9,
//       img: "https://st41653.ispot.cc/Uploads/20240313213400113448868.jpg",
//       name: "Andriod | Micro Loot cable 1meter",
//       price: "Rs.0",
//     },
//     {
//       id: 10,
//       img: "https://st41653.ispot.cc/Uploads/202401240546111549907870.jpg",
//       name: "T800 Ultra  Smart Watch Ultra",
//       price: "Rs.0",
//     },
//   ];

//   // Add to Cart Function
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     alert(`${product.name} added to cart!`);
//   };

//   return (
//     <>
//       <h1 className="text-4xl font-bold pl-7 my-10">New Products</h1>
//       <div className="grid grid-cols-5 gap-6 p-6 w-auto">
//         {products.map((i) => (
//           <div
//             key={i.id}
//             className="bg-white shadow-2xl border hover:shadow-black rounded-3xl p-4 text-center"
//           >
//             {/* Wishlist icon */}
//             <div className="flex justify-end">
//               <FaHeart className="bg-white shadow-2xl hover:text-red-500 rounded-full text-2xl p-1 cursor-pointer" />
//             </div>

//             {/* Product Image with hover group */}
//             <div className="relative group">
//               <img
//                 src={i.img}
//                 alt={i.name}
//                 className="w-60 h-55 mx-auto rounded-xl"
//               />
//               {/* Hover Add to Cart Button */}
//               <button
//                 onClick={() => addToCart(i)}
//                 className="absolute inset-0 m-auto h-10 w-40 bg-orange-500 hover:bg-orange-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
//               >
//                 Add to Cart
//               </button>
//             </div>

//             {/* Product Info */}
//             <h1 className="font-semibold mt-2 line-clamp-2">{i.name}</h1>
//             <p className="text-black font-bold text-left pl-2 mb-3">{i.price}</p>

//             <div>
//               <FaStar className="hover:text-yellow-500 text-gray-400" />
//               <p className="text-left pl-5 mt-[-20px]">(0 reviews)</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="p-6 mt-10 bg-gray-100 rounded-xl">
//         <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
//         {cart.length === 0 ? (
//           <p className="text-gray-500">Cart is empty</p>
//         ) : (
//           <ul className="list-disc pl-6 space-y-2">
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.name} - <span className="font-bold">{item.price}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }

// export default Page;



"use client";
import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

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

  // Add to Cart Function
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <h1 className="text-4xl font-bold pl-7 my-10">New Products</h1>
      <div className="grid grid-cols-5 gap-6 p-6 w-auto">
        {products.map((i) => (
          <div
            key={i.id}
            className="bg-white shadow-2xl border hover:shadow-black rounded-3xl p-4 text-center"
          >
            {/* Wishlist icon */}
            <div className="flex justify-end">
              <FaHeart className="bg-white shadow-2xl hover:text-red-500 rounded-full text-2xl p-1 cursor-pointer" />
            </div>

            {/* Product Image with hover group */}
            <div className="relative group">
              <img
                src={i.img}
                alt={i.name}
                className="w-60 h-55 mx-auto rounded-xl"
              />
              {/* Hover Add to Cart Button with slide-up animation */}
              <button
                onClick={() => addToCart(i)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 
                  bg-orange-500 hover:bg-orange-600 text-white rounded-lg 
                  px-4 py-2 opacity-0 group-hover:opacity-100 
                  translate-y-4 group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Info */}
            <h1 className="font-semibold mt-2 line-clamp-2">{i.name}</h1>
            <p className="text-black font-bold text-left pl-2 mb-3">{i.price}</p>

            <div>
              <FaStar className="hover:text-yellow-500 text-gray-400" />
              <p className="text-left pl-5 mt-[-20px]">(0 reviews)</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="p-6 mt-10 bg-gray-100 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <ul className="list-disc pl-6 space-y-2">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Page;

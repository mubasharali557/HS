// // // "use client";
// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import {
// // //   FaFacebook,
// // //   FaTwitter,
// // //   FaInstagram,
// // //   FaYoutube,
// // //   FaTiktok,
// // // } from "react-icons/fa";

// // // const page = () => {
// // //   const sections = [
// // //     {
// // //       title: "About HS",
// // //       links: [
// // //         "Crafting delicious moments with our premium baked goods.",
// // //         "Made with love and the finest ingredients.",
// // //       ],
// // //     },
// // //     {
// // //       title: "Quick Links",
// // //       links: [
// // //         "Cakes",
// // //         "Cupcakes",
// // //         "Desserts",
// // //         "Bakery Products",
// // //         "About Us",
// // //         "Privacy Policy",
// // //       ],
// // //     },
// // //     {
// // //       title: "Contact Info",
// // //       links: [
// // //         "WhatsApp: +92 309 4037421",
// // //         "Email: hs.electric.official@gmail.com",
// // //         "Address: SM Electric Co, Plot 27, Block 14, College Rd, Township, Lahore, Punjab",
// // //       ],
// // //     },
// // //     {
// // //       title: "Timings",
// // //       links: ["9:00 AM – 8:00 PM"],
// // //     },
// // //   ];

// // //   const socialIcons = [
// // //     { icon: FaFacebook, color: "#1877F2" },
// // //     { icon: FaTwitter, color: "#1DA1F2" },
// // //     { icon: FaInstagram, color: "#E1306C" },
// // //     { icon: FaYoutube, color: "#FF0000" },
// // //     { icon: FaTiktok, color: "#010101" },
// // //   ];

// // //   return (
// // //     <footer className="bg-[#0c1445] text-white py-12 px-6 mt-10">
// // //       {/* Sections */}
// // //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
// // //         {sections.map((section, index) => (
// // //           <div key={index}>
// // //             <h3 className="font-bold mb-4">{section.title}</h3>
// // //             <ul className="space-y-2 text-gray-300">
// // //               {section.links.map((link, i) => (
// // //                 <motion.li
// // //                   key={i}
// // //                   whileHover={{ x: 8 }}
// // //                   transition={{ type: "spring", stiffness: 200 }}
// // //                   className="cursor-pointer hover:text-white"
// // //                 >
// // //                   • {link}
// // //                 </motion.li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Social Media Icons with brand color hover */}
// // //       <div className="mt-10 flex justify-center space-x-6 text-2xl text-gray-400">
// // //         {socialIcons.map(({ icon: Icon, color }, i) => (
// // //           <motion.div
// // //             key={i}
// // //             whileHover={{ scale: 1.3, rotate: 10 }}
// // //             whileTap={{ scale: 0.9 }}
// // //             className="cursor-pointer transition-colors duration-300"
// // //           >
// // //             <Icon
// // //               className="hover:transition-all"
// // //               style={{ transition: "color 0.3s ease" }}
// // //               onMouseEnter={(e) => (e.currentTarget.style.color = color)}
// // //               onMouseLeave={(e) => (e.currentTarget.style.color = "")}
// // //             />
// // //           </motion.div>
// // //         ))}
// // //       </div>

// // //       {/* Bottom text */}
// // //       <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm">
// // //         © 2025 HS. All rights reserved.
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default page;


// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import {
// //   FaFacebook,
// //   FaTwitter,
// //   FaInstagram,
// //   FaYoutube,
// //   FaTiktok,
// // } from "react-icons/fa";

// // const Footer = () => {
// //   const sections = [
// //     {
// //       title: "About HS",
// //       links: [
// //         "Crafting delicious moments with our premium baked goods.",
// //         "Made with love and the finest ingredients.",
// //       ],
// //     },
// //     {
// //       title: "Quick Links",
// //       links: [
// //         "Cakes",
// //         "Cupcakes",
// //         "Desserts",
// //         "Bakery Products",
// //         "About Us",
// //         "Privacy Policy",
// //       ],
// //     },
// //     {
// //       title: "Contact Info",
// //       links: [
// //         "WhatsApp: +92 309 4037421",
// //         "Email: hs.electric.official@gmail.com",
// //         "Address: SM Electric Co, Plot 27, Block 14, College Rd, Township, Lahore, Punjab",
// //       ],
// //     },
// //     {
// //       title: "Timings",
// //       links: ["9:00 AM – 8:00 PM"],
// //     },
// //   ];

// //   const socialIcons = [
// //     { icon: FaFacebook, color: "#1877F2" },
// //     { icon: FaTwitter, color: "#1DA1F2" },
// //     { icon: FaInstagram, color: "#E1306C" },
// //     { icon: FaYoutube, color: "#FF0000" },
// //     { icon: FaTiktok, color: "#010101" },
// //   ];

// //   return (
// //     <footer className="bg-[#facc15] text-black py-12 px-6 mt-10">
// //       {/* Logo and Sections */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-start">
// //         {/* Logo on Left */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -20 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="flex flex-col items-start"
// //         >
// //           <Image
// //             src="/logo.jpg" // Put your logo in public/logo.png
// //             alt="HS Logo"
// //             width={50}
// //             height={50}
// //             className="mb-2"
// //           />
// //           <h2 className="text-lg font-bold text-black">HS Electric</h2>
// //         </motion.div>

// //         {/* Rest of the Sections */}
// //         {sections.map((section, index) => (
// //           <div key={index}>
// //             <h3 className="font-bold mb-4 text-black">{section.title}</h3>
// //             <ul className="space-y-2 text-gray-800">
// //               {section.links.map((link, i) => (
// //                 <motion.li
// //                   key={i}
// //                   whileHover={{ x: 8 }}
// //                   transition={{ type: "spring", stiffness: 200 }}
// //                   className="cursor-pointer hover:text-black"
// //                 >
// //                   • {link}
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Social Media Icons with brand color hover */}
// //       <div className="mt-10 flex justify-center space-x-6 text-2xl text-gray-700">
// //         {socialIcons.map(({ icon: Icon, color }, i) => (
// //           <motion.div
// //             key={i}
// //             whileHover={{ scale: 1.3, rotate: 10 }}
// //             whileTap={{ scale: 0.9 }}
// //             className="cursor-pointer transition-colors duration-300"
// //           >
// //             <Icon
// //               className="hover:transition-all"
// //               style={{ transition: "color 0.3s ease" }}
// //               onMouseEnter={(e) => (e.currentTarget.style.color = color)}
// //               onMouseLeave={(e) => (e.currentTarget.style.color = "")}
// //             />
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* Bottom text */}
// //       <div className="mt-10 border-t border-yellow-300 pt-4 text-center text-gray-700 text-sm">
// //         © 2025 HS Electric. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;




// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
// } from "react-icons/fa";

// const Footer = () => {
//   const sections = [
//     {
//       title: "About HS",
//       links: [
//         "Crafting delicious moments with our premium baked goods.",
//         "Made with love and the finest ingredients.",
//       ],
//     },
//     {
//       title: "Quick Links",
//       links: [
//         "Cakes",
//         "Cupcakes",
//         "Desserts",
//         "Bakery Products",
//         "About Us",
//         "Privacy Policy",
//       ],
//     },
//     {
//       title: "Contact Info",
//       links: [
//         "WhatsApp: +92 309 4037421",
//         "Email: hs.electric.official@gmail.com",
//         "Address: SM Electric Co, Plot 27, Block 14, College Rd, Township, Lahore, Punjab",
//       ],
//     },
//     {
//       title: "Timings",
//       links: ["9:00 AM – 8:00 PM"],
//     },
//   ];

//   const socialIcons = [
//     { icon: FaFacebook, color: "#1877F2" },
//     { icon: FaTwitter, color: "#1DA1F2" },
//     { icon: FaInstagram, color: "#E1306C" },
//     { icon: FaYoutube, color: "#FF0000" },
//     { icon: FaTiktok, color: "#010101" },
//   ];

//   return (
//     <footer className="bg-[#0c1445] text-white py-12 px-6 mt-10">
//       {/* Sections */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {sections.map((section, index) => (
//           <div key={index}>
//             <h3 className="font-bold mb-4">{section.title}</h3>
//             <ul className="space-y-2 text-gray-300">
//               {section.links.map((link, i) => (
//                 <motion.li
//                   key={i}
//                   whileHover={{ x: 8 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className="cursor-pointer hover:text-white"
//                 >
//                   • {link}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Social Media Icons with brand color hover */}
//       <div className="mt-10 flex justify-center space-x-6 text-2xl text-gray-400">
//         {socialIcons.map(({ icon: Icon, color }, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.3, rotate: 10 }}
//             whileTap={{ scale: 0.9 }}
//             className="cursor-pointer transition-colors duration-300"
//           >
//             <Icon
//               className="hover:transition-all"
//               style={{ transition: "color 0.3s ease" }}
//               onMouseEnter={(e) => (e.currentTarget.style.color = color)}
//               onMouseLeave={(e) => (e.currentTarget.style.color = "")}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom text */}
//       <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm">
//         © 2025 HS. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Left Column: Logo + Desc + Social */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/logo.jpg"
            alt="HS Electric Logo"
            width={60}
            height={60}
            className="mb-4 rounded-full border-2 border-yellow-400"
          />
          <p className="text-gray-300 mb-4 max-w-xs">
            Powering your life with high-quality electric products and professional service.
          </p>
          <div className="flex space-x-4">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/923094037421"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#25D366]"
            >
              <FaWhatsapp className="transition-colors duration-300" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#E1306C]"
            >
              <FaInstagram className="transition-colors duration-300" />
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#1877F2]"
            >
              <FaFacebook className="transition-colors duration-300" />
            </motion.a>
          </div>
        </motion.div>

        {/* Middle Column: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-white border-b-2 border-yellow-400 inline-block mb-4">
            Contact Info
          </h3>
          <ul className="text-gray-300 space-y-3 text-sm">
            <li>
              <strong className="text-yellow-400">WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/923094037421"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
              >
                +92 309 4037421
              </a>
            </li>
            <li>
              <strong className="text-yellow-400">Email:</strong><br />
              hs.electric.offical@gmail.com
            </li>
            <li>
              <strong className="text-yellow-400">Address:</strong><br />
              SM Electric Co, Plot 27, Block 14, College Rd, Sector B-I, Township, Lahore, Punjab
            </li>
            <li>
              <strong className="text-yellow-400">Timings:</strong> 9:00 AM – 8:00 PM
            </li>
          </ul>
        </motion.div>

        {/* Right Column: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-white border-b-2 border-yellow-400 inline-block mb-4">
            Quick Links
          </h3>
          <ul className="text-gray-300 space-y-3 text-sm">
            {[
              "Home",
              "Products",
              "Electrical Tools",
              "Lighting & Fixtures",
              "Contact Us",
              "Privacy Policy",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer hover:text-yellow-400"
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400"
      >
        © 2025{" "}
        <a
          href="mailto:hs.electric.offical@gmail.com"
          className="hover:text-yellow-400"
        >
          hs.electric.offical@gmail.com
        </a>
        . All rights reserved. &nbsp;
        <a href="#" className="hover:text-yellow-400">
          Privacy Policy
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
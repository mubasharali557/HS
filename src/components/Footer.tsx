// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   FaInstagram,
//   FaFacebook,
//   FaWhatsapp,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white px-6 py-12">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
//       >
//         {/* Left Column: Logo + Desc + Social */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <Image
//             src="/logo.jpg"
//             alt="HS Electric Logo"
//             width={60}
//             height={60}
//             className="mb-4 rounded-full border-2 border-yellow-400"
//           />
//           <p className="text-gray-300 mb-4 max-w-xs">
//             Powering your life with high-quality electric products and professional service.
//           </p>
//           <div className="flex space-x-4">
//             {/* WhatsApp */}
//             <motion.a
//               href="https://wa.me/923094037421"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#25D366]"
//             >
//               <FaWhatsapp className="transition-colors duration-300" />
//             </motion.a>

//             {/* Instagram */}
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#E1306C]"
//             >
//               <FaInstagram className="transition-colors duration-300" />
//             </motion.a>

//             {/* Facebook */}
//             <motion.a
//               href="#"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#1877F2]"
//             >
//               <FaFacebook className="transition-colors duration-300" />
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Middle Column: Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h3 className="text-lg font-bold text-white border-b-2 border-yellow-400 inline-block mb-4">
//             Contact Info
//           </h3>
//           <ul className="text-gray-300 space-y-3 text-sm">
//             <li>
//               <strong className="text-yellow-400">WhatsApp:</strong>{" "}
//               <a
//                 href="https://wa.me/923094037421"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-yellow-400"
//               >
//                 +92 309 4037421
//               </a>
//             </li>
//             <li>
//               <strong className="text-yellow-400">Email:</strong><br />
//               hs.electric.offical@gmail.com
//             </li>
//             <li>
//               <strong className="text-yellow-400">Address:</strong><br />
//               SM Electric Co, Plot 27, Block 14, College Rd, Sector B-I, Township, Lahore, Punjab
//             </li>
//             <li>
//               <strong className="text-yellow-400">Timings:</strong> 9:00 AM – 8:00 PM
//             </li>
//           </ul>
//         </motion.div>

//         {/* Right Column: Quick Links */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h3 className="text-lg font-bold text-white border-b-2 border-yellow-400 inline-block mb-4">
//             Quick Links
//           </h3>
//           <ul className="text-gray-300 space-y-3 text-sm">
//             {[
//               "Home",
//               "Products",
//               "Electrical Tools",
//               "Lighting & Fixtures",
//               "Contact Us",
//               "Privacy Policy",
//             ].map((item, idx) => (
//               <motion.li
//                 key={idx}
//                 whileHover={{ x: 6 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="cursor-pointer hover:text-yellow-400"
//               >
//                 • {item}
//               </motion.li>
//             ))}
//           </ul>
//         </motion.div>
//       </motion.div>

//       {/* Bottom Footer Text */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400"
//       >
//         © 2025{" "}
//         <a
//           href="mailto:hs.electric.offical@gmail.com"
//           className="hover:text-yellow-400"
//         >
//           hs.electric.offical@gmail.com
//         </a>
//         . All rights reserved. &nbsp;
//         <a href="#" className="hover:text-yellow-400">
//           Privacy Policy
//         </a>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;



"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      {/* Top Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
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
          <p className="text-gray-300 mb-4 max-w-sm leading-relaxed">
            Powering your life with high-quality electric products and
            professional service.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <motion.a
              href="https://wa.me/923094037421"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#25D366]"
            >
              <FaWhatsapp size={18} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#E1306C]"
            >
              <FaInstagram size={18} />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow transition text-gray-900 hover:text-[#1877F2]"
            >
              <FaFacebook size={18} />
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
              <strong className="text-yellow-400">Email:</strong> <br />
              <a
                href="mailto:hs.electric.offical@gmail.com"
                className="hover:text-yellow-400"
              >
                hs.electric.offical@gmail.com
              </a>
            </li>
            <li>
              <strong className="text-yellow-400">Address:</strong> <br />
              SM Electric Co, Plot 27, Block 14, College Rd, Sector B-I,
              Township, Lahore, Punjab
            </li>
            <li>
              <strong className="text-yellow-400">Timings:</strong> 9:00 AM –
              8:00 PM
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

      {/* Bottom Footer */}
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
          HS Electric Store
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

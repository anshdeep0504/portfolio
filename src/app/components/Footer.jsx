"use client"; // <-- Add this line at the very top of your component file

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-6 mt-12">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Made by Ansh
        </motion.p>
        <motion.p
          className="text-slate-400 mt-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          All rights reserved. {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

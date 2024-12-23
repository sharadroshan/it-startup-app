"use client";
import React from "react";
import { motion } from "framer-motion";

const HoverMotionDiv = ({ children }) => (
    <motion.div
    className=""
    whileHover={{
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.div>
);

export default HoverMotionDiv;

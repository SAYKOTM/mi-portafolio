'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedCard({ imgSrc, title, aboutProduct }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotate: isHovered ? 0 : -5,
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -10 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative w-64 h-80 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mx-auto">
            {imgSrc ? (
              <img 
                src={imgSrc} 
                alt={title} 
                className="w-10 h-10"
              />
            ) : (
              <div className="w-10 h-10 bg-white rounded" />
            )}
          </div>
          
          <h3 className="text-xl font-bold text-center mb-3 text-white">
            {title}
          </h3>
          
          <p className="text-gray-300 text-sm text-center flex-grow">
            {aboutProduct}
          </p>
          
          <motion.div 
            className="mt-4 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"
            animate={{ width: isHovered ? "100%" : "60%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`font-serif font-bold transition-all duration-300 ${
            scrolled ? 'text-navy text-xl' : 'text-navy text-2xl'
          }`}>
            Class of 2025
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-1 md:space-x-2"
        >
          {['Memories', 'Journey', 'Future'].map((item, index) => (
            <button
              key={item}
              className={`px-2 md:px-4 py-1 rounded-full text-sm transition-all duration-300 ${
                scrolled 
                  ? 'bg-navy text-white hover:bg-opacity-90' 
                  : 'bg-white bg-opacity-80 text-navy hover:bg-opacity-100'
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      </div>
    </header>
  );
};
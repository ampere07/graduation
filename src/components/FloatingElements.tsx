import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Lightbulb, Star, BookText, Pencil } from 'lucide-react';

export const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: BookOpen, x: '10%', y: '15%', size: 24, color: 'text-navy opacity-20', delay: 0 },
    { Icon: Award, x: '80%', y: '20%', size: 32, color: 'text-gold opacity-30', delay: 1.5 },
    { Icon: Lightbulb, x: '20%', y: '75%', size: 28, color: 'text-burgundy opacity-20', delay: 0.8 },
    { Icon: Star, x: '85%', y: '70%', size: 24, color: 'text-gold opacity-25', delay: 2 },
    { Icon: BookText, x: '60%', y: '85%', size: 26, color: 'text-navy opacity-15', delay: 1.2 },
    { Icon: Pencil, x: '30%', y: '40%', size: 22, color: 'text-gray-500 opacity-20', delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: element.delay }}
          style={{ left: element.x, top: element.y }}
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: index * 0.3,
            }}
          >
            <element.Icon size={element.size} className={element.color} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
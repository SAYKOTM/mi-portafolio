'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillChart({ skill, percentage, color, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const colorClasses = {
    indigo: 'from-indigo-400 to-indigo-600',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    pink: 'from-pink-400 to-pink-600',
    green: 'from-green-400 to-green-600'
  };

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-300">{skill}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-sm font-bold text-indigo-400"
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="h-2.5 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1 + 0.2,
            ease: "easeOut" 
          }}
          className={`h-full rounded-full bg-gradient-to-r ${colorClasses[color] || colorClasses.indigo} shadow-lg`}
        />
      </div>
      
      {/* Puntos de referencia */}
      <div className="flex justify-between mt-1">
        {[0, 25, 50, 75, 100].map((point) => (
          <div key={point} className="relative">
            <div className={`w-0.5 h-1 ${percentage >= point ? 'bg-indigo-500/50' : 'bg-gray-600/30'}`} />
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-500">
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
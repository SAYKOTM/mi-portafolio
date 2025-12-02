'use client'
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative group"
    >
      {/* Línea de tiempo */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-indigo-500 to-indigo-500/50 transform -translate-x-1/2 md:translate-x-0" />
      
      {/* Punto en la línea */}
      <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 border-4 border-gray-900 transform -translate-x-1/2 md:translate-x-0 z-10 group-hover:scale-125 transition-transform duration-300" />
      
      {/* Tarjeta de experiencia */}
      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-5/12`}>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-indigo-500/10">
          
          {/* Encabezado */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div className="mb-3 md:mb-0">
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {experience.role}
              </h3>
              <p className="text-indigo-400 font-medium">{experience.company}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs">
                <Calendar className="w-3 h-3" />
                {experience.period}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                <Briefcase className="w-3 h-3" />
                {experience.type}
              </span>
            </div>
          </div>
          
          {/* Ubicación */}
          {experience.location && (
            <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          )}
          
          {/* Descripción */}
          <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
            {experience.description}
          </p>
          
          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-indigo-400 hover:bg-gray-700 hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Logros */}
          {experience.achievements && (
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Logros destacados:</h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
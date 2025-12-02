'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose, scrollToSection }) {
  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Estadísticas', id: 'stats' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Experiencia', id: 'experiencia' },
    { label: 'Educación', id: 'educación' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Fondo oscuro */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Menú lateral */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gray-900 border-l border-gray-800 shadow-2xl"
          >
            {/* Header del menú */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                Navegación
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            
            {/* Items del menú */}
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item, idx) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-gray-300 group-hover:text-white font-medium">
                        {item.label}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            {/* Footer del menú */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm text-center">
                © 2024 Nicolás Hernández
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
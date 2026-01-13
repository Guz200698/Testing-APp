import React, { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  onNavigate: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavClick = (tab?: TabType, hash?: string) => {
    if (tab) onNavigate(tab);
    if (hash) {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={scrollToTop}
          >
            <Sun className="h-8 w-8 text-amber-600" />
            <span className="font-cinzel text-2xl font-bold text-amber-800">
              Nombre del Proyecto
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
                onClick={scrollToTop}
                className="text-gray-700 hover:text-amber-600 transition font-medium"
            >
                Inicio
            </button>
            <button 
                onClick={() => handleNavClick('cursos')}
                className="text-gray-700 hover:text-amber-600 transition font-medium"
            >
                Astro Cursos
            </button>
            <button 
                onClick={() => handleNavClick('tarot')}
                className="text-gray-700 hover:text-amber-600 transition font-medium"
            >
                Tarot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-amber-600 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <button onClick={scrollToTop} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50">
            Inicio
          </button>
          <button onClick={() => handleNavClick('cursos')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50">
            Astro Cursos
          </button>
          <button onClick={() => handleNavClick('tarot')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-amber-50">
            Tarot
          </button>
        </div>
      )}
    </nav>
  );
};
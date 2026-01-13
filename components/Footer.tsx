import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import { TabType } from '../types';

interface FooterProps {
    onNavigate: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contacto" className="bg-gray-900 text-amber-50/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="h-6 w-6 text-amber-500" />
            <span className="font-cinzel text-xl font-bold text-white">Nombre del Proyecto</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Fusionando el cielo y la tierra para tu evolución personal. Cursos de astrología profesional y sabiduría ancestral del tarot en un solo lugar.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Explora</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-amber-400 transition">Sobre Mí</a></li>
            <li>
                <button onClick={() => onNavigate('cursos')} className="hover:text-amber-400 transition text-left">
                    Cursos Online
                </button>
            </li>
            <li>
                <button onClick={() => onNavigate('tarot')} className="hover:text-amber-400 transition text-left">
                    Lecturas Privadas
                </button>
            </li>
            <li><a href="#blog" className="hover:text-amber-400 transition">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#terms" className="hover:text-amber-400 transition">Términos y Condiciones</a></li>
            <li><a href="#privacy" className="hover:text-amber-400 transition">Política de Privacidad</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; 2025 Nombre del Proyecto. Todos los derechos reservados.
      </div>
    </footer>
  );
};
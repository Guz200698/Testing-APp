import React from 'react';
import { Sparkles, Moon, Sun, Flower, Flower2, Stars, ArrowRight } from 'lucide-react';
import { TabType } from '../types';

interface HeroProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeTab, onTabChange }) => {
  const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section id="inicio" className="relative pt-20 pb-40 overflow-hidden bg-[#FEF3C7]" style={{ backgroundImage: `url("${heroPattern}")` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center mb-12">
        
        {/* Text Area */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10 mt-10 md:mt-0">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            Aquí va el subtítulo o categoría
          </span>
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-gray-900 leading-tight mb-6">
            Aquí va el <br />
            <span className="text-amber-600">Título Principal</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Aquí va la descripción principal de la página. Explica brevemente la propuesta de valor y qué encontrará el usuario en este sitio web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => onTabChange('cursos')} 
              className="px-8 py-4 rounded-full sunflower-gradient text-white font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Botón Principal
            </button>
            <button 
              onClick={() => onTabChange('tarot')} 
              className="px-8 py-4 rounded-full bg-white text-amber-700 border-2 border-amber-100 font-bold hover:bg-amber-50 transition flex items-center justify-center"
            >
              Botón Secundario
            </button>
          </div>
        </div>

        {/* Image/Animation Area */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Sunflower Decorative Circle */}
            <div className="absolute inset-0 bg-amber-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 border-4 border-dashed border-amber-400 rounded-full animate-[spin_10s_linear_infinite]"></div>
            
            {/* Central Element */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-amber-100 flex items-center justify-center">
              <div className="text-center p-8">
                <Flower className="w-24 h-24 text-amber-500 mx-auto mb-4" />
                <p className="font-cinzel text-amber-800 text-xl">Elemento Visual</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_3s_infinite]">
              <Moon className="text-purple-600 w-5 h-5" />
              <span className="text-sm font-bold text-gray-700">Dato 1</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_4s_infinite]">
              <Sun className="text-amber-500 w-5 h-5" />
              <span className="text-sm font-bold text-gray-700">Dato 2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Control Buttons */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tarot Button */}
          <button 
            onClick={() => onTabChange('tarot')}
            className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex items-center justify-between border-2 text-left w-full ${activeTab === 'tarot' ? 'border-amber-600 bg-amber-50 transform scale-[1.02]' : 'border-transparent hover:border-amber-400'}`}
          >
            <div className="flex items-center gap-5">
              <div className="bg-amber-100 p-4 rounded-full text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <Flower2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">Título Sección 1</h3>
                <p className="text-sm text-gray-600 font-medium mt-1">Descripción corta sección 1</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <ArrowRight className="w-5 h-5 text-amber-300 group-hover:text-white transition-colors" />
            </div>
          </button>

          {/* Courses Button */}
          <button 
            onClick={() => onTabChange('cursos')}
            className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex items-center justify-between border-2 text-left w-full ${activeTab === 'cursos' ? 'border-indigo-600 bg-indigo-50 transform scale-[1.02]' : 'border-transparent hover:border-indigo-400'}`}
          >
            <div className="flex items-center gap-5">
              <div className="bg-indigo-50 p-4 rounded-full text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Stars className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">Título Sección 2</h3>
                <p className="text-sm text-gray-600 font-medium mt-1">Descripción corta sección 2</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
              <ArrowRight className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 65C96 70 192 80 288 83.3C384 86.7 480 83.3 576 73.3C672 63.3 768 46.7 864 45C960 43.3 1056 56.7 1152 65C1248 73.3 1344 76.7 1392 78.3L1440 80V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="#FEFDF5" fillOpacity="1" className="fill-amber-50/50"/>
        </svg>
      </div>
    </section>
  );
};
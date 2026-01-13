import React, { useState, useEffect } from 'react';
import { Star, Moon, Heart, HeartHandshake, CheckCircle2, Flower, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: 1,
    title: "Nombre del Plan 1",
    description: "Aquí va la descripción del plan 1. Explica brevemente de qué trata este curso y sus beneficios.",
    price: "00€",
    imageIcon: 'moon',
    gradient: "from-purple-800 to-indigo-900",
    tag: "ETIQUETA",
    tagColor: "bg-amber-500",
    features: ["Característica 1", "Característica 2"]
  },
  {
    id: 2,
    title: "Nombre del Plan 2",
    description: "Aquí va la descripción del plan 2. Explica brevemente de qué trata este curso y sus beneficios.",
    price: "00€",
    imageIcon: 'sun',
    gradient: "from-amber-600 to-orange-700",
    tag: "NUEVO",
    tagColor: "bg-green-600",
    features: ["Característica 1", "Característica 2"]
  },
  {
    id: 3,
    title: "Nombre del Plan 3",
    description: "Aquí va la descripción del plan 3. Explica brevemente de qué trata este curso y sus beneficios.",
    price: "00€",
    imageIcon: 'heart',
    gradient: "from-pink-700 to-rose-900",
    features: ["Característica 1", "Característica 2"]
  },
  {
    id: 4,
    title: "Nombre del Plan 4",
    description: "Aquí va la descripción del plan 4. Explica brevemente de qué trata este curso y sus beneficios.",
    price: "00€",
    imageIcon: 'moon',
    gradient: "from-indigo-900 to-purple-900",
    features: ["Característica 1", "Característica 2"]
  },
  {
    id: 5,
    title: "Nombre del Plan 5",
    description: "Aquí va la descripción del plan 5. Explica brevemente de qué trata este curso y sus beneficios.",
    price: "00€",
    imageIcon: 'sun',
    gradient: "from-orange-500 to-red-600",
    features: ["Característica 1", "Característica 2"]
  },
  {
    id: 6,
    title: "Nombre del Plan 6",
    description: "Aquí va la descripción del plan 6. Explica brevemente de qué trata este curso y sus beneficios.",
    price: "00€",
    imageIcon: 'moon',
    gradient: "from-blue-800 to-indigo-800",
    tag: "ETIQUETA",
    tagColor: "bg-blue-500",
    features: ["Característica 1", "Característica 2"]
  }
];

export const CoursesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Ajustar número de items visibles según el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= courses.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? courses.length - itemsPerPage : prev - 1
    );
  };

  return (
    <div className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-cinzel">Título de la Sección Cursos</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Aquí va la descripción general de la sección de cursos. Explica la metodología, a quién van dirigidos y el valor que aportan.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-14">
        {/* Flechas de Navegación */}
        <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-indigo-400 hover:text-indigo-600 transition transform hover:scale-110"
            aria-label="Anterior"
        >
            <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
        </button>

        <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-indigo-400 hover:text-indigo-600 transition transform hover:scale-110"
            aria-label="Siguiente"
        >
            <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
        </button>

        {/* Ventana del Carrusel */}
        <div className="overflow-hidden py-4 -mx-4 px-4">
            <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
                {courses.map((course) => (
                    <div 
                        key={course.id} 
                        className="flex-shrink-0 px-3 md:px-4"
                        style={{ width: `${100 / itemsPerPage}%` }}
                    >
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-100 flex flex-col h-full">
                            <div className="h-48 bg-gray-200 relative overflow-hidden group">
                                <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} flex items-center justify-center group-hover:scale-105 transition duration-500`}>
                                    {course.imageIcon === 'moon' && <Star className="text-white/20 w-24 h-24 absolute -bottom-4 -right-4" />}
                                    {course.imageIcon === 'sun' && <Flower className="text-white/20 w-24 h-24 absolute -top-4 -left-4" />}
                                    {course.imageIcon === 'heart' && <Heart className="text-white/20 w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                    
                                    <span className="text-white font-bold text-xl relative z-10 flex items-center gap-2">
                                    {course.imageIcon === 'moon' && <Moon className="w-6 h-6" />}
                                    {course.imageIcon === 'sun' && <Flower className="w-6 h-6" />}
                                    {course.imageIcon === 'heart' && <HeartHandshake className="w-6 h-6" />}
                                    {/* Generic text for category icon */}
                                    Categoría
                                    </span>
                                </div>
                                {course.tag && (
                                    <div className={`absolute top-4 right-4 ${course.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                                    {course.tag}
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{course.description}</p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">
                                    {course.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" /> {feature}
                                    </li>
                                    ))}
                                </ul>
                                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                                    <span className="text-2xl font-bold text-amber-600">{course.price}</span>
                                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm font-medium">
                                    Ver Detalle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="#catalogo" className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:text-indigo-800 transition border-b-2 border-indigo-200 pb-1 hover:border-indigo-500">
          Enlace a catálogo completo
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
import React from 'react';
import { Info, Check, AlertCircle, Clock, Video, ShieldAlert, DollarSign, XCircle, Mail, Scroll, Sun, Zap } from 'lucide-react';

export const TarotSection: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-cinzel">Título de la Sección Servicios</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
        
        {/* Info Block */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 max-w-4xl mx-auto text-left shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-amber-100 p-2 rounded-full text-amber-600 flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-1 font-cinzel">Título del Bloque Informativo</h3>
              <p className="text-amber-700 font-bold text-sm uppercase tracking-wide mb-4">Subtítulo informativo aquí</p>
            </div>
          </div>
          
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Aquí va un punto importante sobre las condiciones del servicio.</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Aquí va otra condición o restricción relevante para el usuario.</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Información sobre tiempos de entrega o duración.</span>
            </li>
            <li className="flex items-start gap-3">
              <Video className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Información sobre el formato de entrega (video, PDF, llamada, etc.).</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Información sobre políticas de reembolso o cancelación.</span>
            </li>
            <li className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Información sobre moneda o métodos de pago.</span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Información sobre canales no disponibles o restricciones de contacto.</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>Información de contacto para dudas: <a href="mailto:correo@ejemplo.com" className="text-amber-700 font-bold underline decoration-amber-300">correo@ejemplo.com</a></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Reading 1 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition hover:-translate-y-1">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
            <Scroll className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-cinzel">Nombre Servicio 1</h3>
          <p className="text-sm text-gray-500 mb-6">Descripción breve del servicio 1. Detalla qué incluye este paquete.</p>
          <div className="text-3xl font-bold text-amber-600 mb-6">$00 USD</div>
          <button className="w-full py-3 rounded-xl border-2 border-amber-500 text-amber-700 font-bold hover:bg-amber-500 hover:text-white transition">Botón de Acción</button>
          <p className="text-xs text-gray-400 mt-3">Detalle adicional (ej: entrega)</p>
        </div>

        {/* Reading 2 (Highlight) */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-400 p-8 flex flex-col items-center text-center transform md:scale-105 relative z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">ETIQUETA DESTACADA</div>
          <div className="w-16 h-16 sunflower-gradient rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
            <Sun className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-cinzel">Nombre Servicio 2</h3>
          <p className="text-sm text-gray-500 mb-6">Descripción breve del servicio 2. Este es el servicio destacado o más popular.</p>
          <div className="text-3xl font-bold text-amber-600 mb-6">$00 USD</div>
          <button className="w-full py-3 rounded-xl sunflower-gradient text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition">Botón de Acción</button>
          <p className="text-xs text-gray-400 mt-3">Detalle adicional (ej: entrega)</p>
        </div>

        {/* Reading 3 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition hover:-translate-y-1">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-cinzel">Nombre Servicio 3</h3>
          <p className="text-sm text-gray-500 mb-6">Descripción breve del servicio 3. Ideal para servicios urgentes o especiales.</p>
          <div className="text-3xl font-bold text-red-500 mb-6">$00 USD</div>
          <button className="w-full py-3 rounded-xl border-2 border-red-200 text-red-600 font-bold hover:bg-red-50 transition">Botón de Acción</button>
          <p className="text-xs text-red-500 mt-3 font-bold">Detalle adicional urgente</p>
        </div>
      </div>
    </div>
  );
};
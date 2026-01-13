import React, { useState } from 'react';
import { Mail, Loader2, CheckCircle, Info, XCircle } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      // Mensaje genérico para la plantilla
      const aestheticMessage = `
✨ Nuevo registro en el sitio web.

Un visitante ha dejado su correo electrónico para suscribirse.

📧 Correo del usuario: ${email}
      `;

      // Integración con Web3Forms
      const formData = new FormData();
      formData.append("access_key", "d077f0a7-2080-4362-958d-ce04338fc90c");
      
      // Datos visuales para el correo que recibes
      formData.append("email", email); // Para que puedas responderle directo
      formData.append("from_name", "Sitio Web"); // El remitente se verá bonito
      formData.append("subject", "Nuevo Suscriptor"); // Un asunto emocionante
      formData.append("message", aestheticMessage); // El mensaje

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || "Hubo un error al procesar tu solicitud.");
      }
    } catch (error) {
      console.error("Error en el envío:", error);
      setStatus('error');
      setErrorMessage("Error de conexión. Por favor intenta de nuevo.");
    }
  };

  return (
    <section id="newsletter" className="bg-amber-100 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Mail className="w-10 h-10 text-amber-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-cinzel">Título del Newsletter</h2>
        <p className="text-gray-700 mb-8">
          Aquí va el texto descriptivo para invitar al usuario a suscribirse. Menciona la frecuencia de los correos y el valor que recibirán.
        </p>
        
        <div id="newsletter-container" className="min-h-[80px]">
            {status === 'success' ? (
                <div className="bg-green-100 p-6 rounded-2xl border border-green-200 animate-fade-in max-w-lg mx-auto shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-green-800 font-cinzel">¡Suscripción Exitosa!</h3>
                    </div>
                    <p className="text-green-700 text-sm mb-3 pl-9">
                        Mensaje de confirmación de registro exitoso.
                    </p>
                </div>
            ) : status === 'error' ? (
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 animate-fade-in max-w-lg mx-auto shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-red-800 font-cinzel">Algo salió mal</h3>
                    </div>
                    <p className="text-red-700 text-sm pl-9 mb-4">
                        {errorMessage || "No pudimos registrar tu correo."}
                    </p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="ml-9 text-sm font-bold text-red-600 hover:text-red-800 underline"
                    >
                        Intentar de nuevo
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto relative">
                    <input 
                        name="email"
                        type="email" 
                        placeholder="Tu correo electrónico" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-6 py-3 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white shadow-sm placeholder-gray-400 text-gray-700"
                        disabled={status === 'loading'}
                    />
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className={`px-8 py-3 rounded-full sunflower-gradient text-white font-bold hover:shadow-lg transition flex items-center justify-center gap-2 min-w-[160px] ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="animate-spin w-5 h-5" />
                                <span>Enviando...</span>
                            </>
                        ) : (
                            <span>Botón Suscribir</span>
                        )}
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};
import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/woman-mindfulness/1920/1080 ')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-lg max-w-3xl shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Adiós Síntomas
          </h1>
          <p className="text-2xl md:text-3xl mb-6">
            Técnicas Milenarias para Eliminar Síntomas de la Ansiedad
          </p>
          <p className="text-lg md:text-xl mb-8 italic">Por Vanessa Valencia, Psicóloga Holística</p>
          <a
            href="#comprar"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition duration-300 shadow-lg transform hover:scale-105"
          >
            Descarga Tu Ebook Ahora
          </a>
        </div>
      </section>

      {/* Symptoms Section with Image */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-6">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://via.placeholder.com/800x400?text=Placeholder+Image "
            alt="Mujer mostrando síntomas de ansiedad"
            className="w-full h-auto rounded-lg shadow-md mb-10"
          />
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ¿Te identificas con estos síntomas?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700 list-disc pl-6">
            <li>Tensión constante en pecho o mandíbula</li>
            <li>Dolor de cabeza recurrente o migrañas</li>
            <li>Problemas para dormir o insomnio nocturno</li>
            <li>Sensación de ahogo o dificultad para respirar</li>
            <li>Palpitaciones o aceleración del corazón</li>
            <li>Fatiga inexplicable o cansancio extremo</li>
            <li>Dolores musculares y contracturas</li>
            <li>Irritabilidad, impaciencia o llanto inesperado</li>
            <li>Rumiación mental interminable</li>
            <li>Ansiedad social o miedo al juicio ajeno</li>
            <li>Problemas digestivos como náuseas o colon irritable</li>
            <li>Baja concentración y olvidos constantes</li>
            <li>Deseo de escapar de situaciones cotidianas</li>
            <li>Miedo constante a fallar, equivocarse o perder el control</li>
          </ul>
        </div>
      </section>

      {/* Solution Section - Mejorada visualmente */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="https://via.placeholder.com/800x400?text=Placeholder+Image "
            alt="Mujer practicando técnicas anti ansiedad"
            className="w-full h-auto rounded-lg shadow-md mb-10"
          />
          <h2 className="text-4xl font-bold mb-10 text-gray-800">
            Esta es la solución que buscabas
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            El ebook <strong>"Adiós Síntomas"</strong> no solo explica por qué aparece la ansiedad, sino que te entrega herramientas prácticas, basadas en técnicas milenarias y validadas científicamente, para reducir esos síntomas paso a paso.
          </p>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            En menos de una semana podrás notar:
          </p>
          <ul className="text-left space-y-4 text-lg text-gray-800">
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-1">✔️</span>
              Menos tensión física y emocional
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-1">✔️</span>
              Mejor calidad de sueño
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-1">✔️</span>
              Mayor claridad mental
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-1">✔️</span>
              Menos palpitaciones y ahogos
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-1">✔️</span>
              Reducción de rumiaciones mentales
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-1">✔️</span>
              Más calma durante el día y noche
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Lo que dicen quienes ya lo probaron
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <p className="italic text-gray-700">“Me sentía atrapada en mi mente. Este ebook me dio herramientas simples y poderosas que aplico cada día. Hoy duermo mejor, pienso con claridad y me siento más yo.”</p>
              <p className="mt-4 font-semibold text-gray-900">— María C., 42 años</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <p className="italic text-gray-700">“No soy fan de leer mucho, pero este libro me enganchó desde el primer capítulo. Las técnicas son fáciles y reales. Mi ansiedad ha bajado un 80%.”</p>
              <p className="mt-4 font-semibold text-gray-900">— Laura M., 51 años</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <p className="italic text-gray-700">“Lo recomiendo sin dudar. Es como tener a tu lado a una amiga experta que te guía con amor y sabiduría.”</p>
              <p className="mt-4 font-semibold text-gray-900">— Ana R., 38 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Oferta exclusiva */}
      <section id="comprar" className="py-20 bg-gradient-to-b from-pink-100 to-pink-50 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl p-8 inline-block w-full mb-6">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
              ¡Tu Vida Sin Ansiedad Empieza Hoy!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Acceso inmediato · Pago seguro · Sin riesgo
            </p>
            <div className="mb-6">
              <p className="line-through text-gray-500 text-lg">Precio normal: $19.99</p>
              <p className="text-pink-600 text-3xl font-bold">OFERTA LIMITADA: $5.00</p>
              <p className="text-sm text-gray-500">Solo hoy · Stock limitado</p>
            </div>
            <button
              onClick={() => {
                window.location.href = 'https://pay.hotmart.com/W99622832H?checkoutMode=2&off=ocl87h2q ';
              }}
              className="hotmart__button-checkout inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-5 px-10 rounded-full text-2xl transition duration-300 shadow-lg transform hover:scale-105"
            >
              DESCARGA TU EBOOK AHORA
            </button>
            <p className="mt-4 text-sm text-gray-600">Acceso inmediato · Garantía de devolución</p>
          </div>
          <p className="text-gray-700 italic">¿Aún dudas? Recuerda que cada minuto que esperas, sigues viviendo con ansiedad.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8">
        <p>&copy; 2025 Adiós Síntomas | Diseñado por Vanessa Valencia</p>
      </footer>

      {/* Hotmart Checkout Script */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            function importHotmart(){ 
              var imported = document.createElement('script'); 
              imported.src = 'https://static.hotmart.com/checkout/widget.min.js '; 
              document.head.appendChild(imported); 
              var link = document.createElement('link'); 
              link.rel = 'stylesheet'; 
              link.type = 'text/css'; 
              link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css '; 
              document.head.appendChild(link);
            } 
            importHotmart(); 
          `,
        }}
      />

    </div>
  );
}

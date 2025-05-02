import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-screen min-h-screen bg-gradient-to-b from-primary-50 to-white pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full bg-gradient-to-b from-primary-50/50 to-white"></div>
      </div>
      
      <div className="relative max-w-screen-2xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Domina la IA Generativa y Transforma tu Carrera Profesional en México
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8">
              Curso de 15 horas diseñado para profesionales: aprende a aplicar LLMs y prompting efectivo en tu sector
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="btn btn-primary">
                Inscríbete Ahora
              </a>
              <a
                href="#course-overview"
                className="btn btn-outline"
              >
                Ver Detalles del Curso
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              {/* Card container */}
              <div className="relative">
                {/* Background card with rotation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl transform rotate-3 scale-105"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-2xl shadow-xl p-4">
                  {/* Image container */}
                  <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="IA Generativa en el trabajo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Social proof section */}
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-200 to-primary-300 border-2 border-white ring-2 ring-primary-100"
                          ></div>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-secondary-600 ml-2">
                        +100 profesionales ya inscritos
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-xs font-medium text-secondary-500">Inscripciones abiertas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
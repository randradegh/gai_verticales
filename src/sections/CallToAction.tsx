import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¡Inscríbete Hoy y Transforma tu Futuro Profesional!
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Únete a la próxima generación de profesionales que dominan la IA generativa en México
          </p>

          <div className="bg-white p-8 rounded-xl shadow-xl mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  Curso Completo
                </h3>
                <p className="text-secondary-600">
                  15 horas de contenido práctico y aplicable
                </p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold text-primary-600">
                  $1,800 MXN
                </span>
                <p className="text-secondary-500 text-sm">
                  Pago único
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="btn-primary w-full text-center"
                >
                  Inscríbete Ahora
                </a>
                <p className="text-sm text-secondary-500">
                  Plazas limitadas
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Certificado de finalización</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Soporte continuo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 
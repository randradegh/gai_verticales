import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQ } from '../types';

const faqs: FAQ[] = [
  {
    id: 1,
    question: '¿Necesito conocimientos previos de programación?',
    answer: 'No, el curso está diseñado para profesionales de todos los niveles. No se requieren conocimientos previos de programación, aunque tener una base en tecnología puede ser beneficioso.',
  },
  {
    id: 2,
    question: '¿Qué herramientas o software necesitaré?',
    answer: 'Solo necesitarás una computadora con conexión a internet. Es recomendable tener una cuenta en alguna plataforma de inteligencia artificial como ChatGPT o Perplexity para practicar durante el curso. Te proporcionaremos acceso a todas las herramientas y plataformas necesarias durante el curso.',
  },
  {
    id: 3,
    question: '¿Obtendré un certificado al finalizar?',
    answer: 'Sí, al completar satisfactoriamente el curso recibirás una Constancia que acredita tu participación. Los requisitos específicos de participación y asistencia se definirán al inicio del curso.',
  },
  {
    id: 4,
    question: '¿Cómo se desarrollan las sesiones a distancia?',
    answer: 'El curso se imparte a través de nuestra plataforma en línea, utilizando Google Meet para las sesiones en vivo. Además, tendrás acceso a videos, ejercicios prácticos y otros materiales. Puedes acceder al contenido en cualquier momento.',
  },
  {
    id: 5,
    question: '¿Habrá soporte después del curso?',
    answer: 'Sí, ofrecemos soporte continuo a través de un grupo de WhatsApp exclusivo para egresados, el cual estará activo hasta dos meses después de finalizar el curso.',
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Resolvemos tus dudas sobre el curso y su implementación
          </p>

          <div className="max-w-3xl mx-auto mt-12">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: faq.id * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-primary-600 transform transition-transform duration-300 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {openFaq === faq.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-secondary-600"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 
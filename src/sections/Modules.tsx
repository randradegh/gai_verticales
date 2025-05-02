import { motion } from 'framer-motion';
import { Module } from '../types';

const modules: Module[] = [
  {
    id: 1,
    title: 'Introducción a la IA Generativa y su Impacto en México',
    duration: '1.5h',
    description: 'Panorama general de la IA generativa, su evolución y su impacto específico en el mercado mexicano.',
  },
  {
    id: 2,
    title: 'Fundamentos Técnicos: Cómo Funcionan los Modelos Generativos y LLMs',
    duration: '2.5h',
    description: 'Conceptos técnicos fundamentales, arquitectura de modelos generativos y funcionamiento de LLMs.',
  },
  {
    id: 3,
    title: 'El Arte y la Ciencia del Prompting Efectivo',
    duration: '3.5h',
    description: 'Técnicas avanzadas de prompting, mejores prácticas y casos de uso prácticos.',
  },
  {
    id: 4,
    title: 'Aplicaciones Verticales de la IA Generativa (Parte 1): Finanzas y Marketing',
    duration: '2.5h',
    description: 'Implementación práctica en sectores financieros y de marketing, con ejemplos del mercado mexicano.',
  },
  {
    id: 5,
    title: 'Aplicaciones Verticales de la IA Generativa (Parte 2): Educación, Salud y otros sectores',
    duration: '2.5h',
    description: 'Aplicaciones específicas en educación, salud y otros sectores relevantes para México.',
  },
  {
    id: 6,
    title: 'Herramientas, Ética y Futuro de la IA Generativa',
    duration: '2.5h',
    description: 'Panorama de herramientas disponibles, consideraciones éticas y tendencias futuras.',
  },
];

const Modules = () => {
  return (
    <section id="modules" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">
            Un Programa Completo de 15 Horas
          </h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Diseñado para proporcionarte las habilidades y conocimientos necesarios para dominar la IA generativa
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-2 ${
                  [2, 3].includes(module.id)
                    ? 'border-primary-500'
                    : 'border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary-600">
                    Módulo {module.id}
                  </span>
                  <span className="text-sm text-secondary-500">
                    {module.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-secondary-600">{module.description}</p>
                {[2, 3].includes(module.id) && (
                  <div className="mt-4">
                    <span className="inline-block bg-primary-100 text-primary-600 text-xs font-semibold px-2 py-1 rounded">
                      Módulo Destacado
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Modules; 
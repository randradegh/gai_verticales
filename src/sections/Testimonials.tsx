import { motion } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Martínez',
    position: 'Directora de Marketing',
    company: 'Empresa Financiera',
    quote: 'Este curso transformó completamente mi enfoque hacia la IA generativa. Ahora puedo implementar soluciones efectivas en mi equipo de marketing.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    position: 'Gerente de Innovación',
    company: 'Consultora Tecnológica',
    quote: 'Los módulos de LLMs y prompting son excepcionales. He podido aplicar estos conocimientos inmediatamente en proyectos con nuestros clientes.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    name: 'María González',
    position: 'Directora Académica',
    company: 'Universidad Privada',
    quote: 'La combinación de teoría y práctica es perfecta. Estamos implementando lo aprendido en nuestros programas educativos con excelentes resultados.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">
            Lo Que Dicen Nuestros Egresados
          </h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Descubre cómo este curso ha impactado la carrera de profesionales como tú
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-secondary-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-secondary-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-secondary-600 italic">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 
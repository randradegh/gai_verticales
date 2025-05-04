import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 GenAI Verticales. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/randrade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary-400 transition-colors duration-300"
            >
              @randrade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
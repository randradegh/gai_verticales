import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Descripción', href: '#course-overview' },
  { label: 'Módulos', href: '#modules' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Inscríbete', href: '#cta' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 w-full"
      >
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="#hero" className="text-2xl font-bold text-primary-600">
                  Curso IA Generativa MX
                </a>
              </div>

              <div className="hidden md:flex md:items-center md:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  className="btn btn-primary"
                >
                  Inscríbete Ahora
                </a>
              </div>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-secondary-700 hover:text-secondary-900 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Menú principal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Menú lateral y overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-lg font-semibold text-primary-600">Menú</span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-secondary-700 hover:text-secondary-900 focus:outline-none"
                    aria-label="Cerrar menú"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="flex-1 px-4 py-6">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block py-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="#cta"
                      className="block w-full text-center btn btn-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Inscríbete Ahora
                    </a>
                  </div>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 
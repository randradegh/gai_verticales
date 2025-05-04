const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Curso IA Generativa MX
            </h3>
            <p className="text-secondary-400">
              Transformando profesionales mexicanos con el poder de la IA generativa.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#course-overview" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Descripción
                </a>
              </li>
              <li>
                <a href="#modules" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Beneficios
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@cursoiagenerativa.mx" className="text-secondary-400 hover:text-white transition-colors duration-200">
                  randradedev@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-secondary-400">
                  +52 55 25765962
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400">
              © 2025 Curso IA Generativa MX. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://x.com/randrade" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/roberto-andrade-f-1338356" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://hashnode.com/@randradedev" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
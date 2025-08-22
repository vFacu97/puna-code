import punaLogo from "/lovable-uploads/ea3bf442-b1b1-4785-9216-3ee588f8d70b.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={punaLogo} 
              alt="Puna Code" 
              className="h-10 w-10 object-contain mr-3 opacity-90"
            />
            <span className="text-lg font-semibold">Puna Code</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm mb-2">
              © 2024 Puna Code. Soluciones tecnológicas desde la altura.
            </p>
            <div className="flex space-x-6 justify-center md:justify-end text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Términos
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#contacto" className="text-white/70 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import punaLogo from "/lovable-uploads/ea3bf442-b1b1-4785-9216-3ee588f8d70b.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={punaLogo} 
            alt="Puna Code" 
            className="h-12 w-12 object-contain"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-foreground hover:text-accent transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-foreground hover:text-accent transition-colors">
            Nosotros
          </a>
          <a href="#testimonios" className="text-foreground hover:text-accent transition-colors">
            Testimonios
          </a>
          <a href="#contacto" className="text-foreground hover:text-accent transition-colors">
            Contacto
          </a>
        </nav>

        <Button variant="cta" size="sm">
          Hablemos
        </Button>
      </div>
    </header>
  );
};

export default Header;
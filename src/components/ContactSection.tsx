import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5493871234567?text=Hola! Me interesa conocer más sobre los servicios de Puna Code", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:hola@punacode.com?subject=Consulta sobre servicios&body=Hola! Me interesa conocer más sobre los servicios de Puna Code", "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-mountain text-white relative overflow-hidden">
      {/* Large Cactus Decoration */}
      <div className="absolute bottom-0 right-12 opacity-20">
        <div className="w-8 h-32 bg-cactus rounded-full relative">
          <div className="absolute -left-4 top-8 w-6 h-16 bg-cactus rounded-full rotate-45" />
          <div className="absolute -right-4 top-12 w-6 h-12 bg-cactus rounded-full -rotate-45" />
          <div className="absolute -left-3 top-20 w-4 h-8 bg-cactus rounded-full rotate-12" />
        </div>
      </div>
      
      {/* Condor Silhouette */}
      <div className="absolute top-12 left-12 opacity-10">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor">
          <path d="M10 30c0-5 15-15 30-10 15-5 30 5 30 10-10-5-20-3-30 0-10-3-20-5-30 0z" />
          <circle cx="20" cy="28" r="1" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para hacer crecer
            <br />
            <span className="text-sun-yellow">tu proyecto?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Conversemos sobre cómo podemos transformar tu idea en una 
            solución tecnológica que impulse tu emprendimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-primary transition-all duration-300 group backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Hablemos por WhatsApp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              onClick={handleEmailClick}
              variant="outline"
              size="lg"
              className="border-2 border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-300 group backdrop-blur-sm"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Escribinos un email
            </Button>
          </div>
          
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-white/60 text-sm">
              📍 Trabajamos desde la Puna Argentina para el mundo
            </p>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
    </section>
  );
};

export default ContactSection;
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="text-cactus mr-2" size={24} />
            <span className="text-muted-foreground text-sm uppercase tracking-wide">
              Soluciones desde la Puna
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Donde tus ideas
            <br />
            <span className="text-transparent bg-gradient-to-r from-accent to-sky-blue bg-clip-text">
              toman altura
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformamos tu emprendimiento con soluciones tecnológicas pensadas 
            para el crecimiento sostenible de tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Agendá tu asesoría
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button variant="terracotta" size="lg">
              Ver casos de éxito
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Minimalist Cactus Silhouette */}
      <div className="absolute bottom-4 right-8 opacity-30">
        <div className="w-4 h-16 bg-cactus rounded-full relative">
          <div className="absolute -left-2 top-4 w-3 h-8 bg-cactus rounded-full rotate-45" />
          <div className="absolute -right-2 top-6 w-3 h-6 bg-cactus rounded-full -rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
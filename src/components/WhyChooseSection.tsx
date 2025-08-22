import { CheckCircle, Heart, Zap, Eye, Users } from "lucide-react";
import journeyPath from "@/assets/journey-path.png";
import andeanSun from "@/assets/andean-sun.png";

const values = [
  {
    icon: Heart,
    title: "Cercanía",
    description: "Te acompañamos en cada paso del camino, como un equipo más de tu empresa.",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Aplicamos las últimas tecnologías para soluciones que realmente funcionen.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Comunicación clara y honesta en cada etapa del proyecto.",
  },
  {
    icon: Users,
    title: "Acompañamiento",
    description: "No solo entregamos, sino que te capacitamos para que seas autónomo.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background relative overflow-hidden">
      {/* Andean Sun Decoration */}
      <div className="absolute top-12 right-12 opacity-10">
        <img src={andeanSun} alt="" className="w-24 h-24" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Journey Visualization */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Tu crecimiento es
              <br />
              <span className="text-cactus">nuestro objetivo</span>
            </h2>
            
            <div className="relative">
              <img 
                src={journeyPath} 
                alt="Camino de crecimiento" 
                className="w-full max-w-md mx-auto opacity-80"
              />
              
              {/* Journey Steps */}
              <div className="absolute inset-0 flex flex-col justify-between py-8">
                <div className="flex items-center ml-4">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3" />
                  <span className="text-sm font-medium text-muted-foreground">Idea inicial</span>
                </div>
                <div className="flex items-center ml-12">
                  <div className="w-3 h-3 bg-sky-blue rounded-full mr-3" />
                  <span className="text-sm font-medium text-muted-foreground">Desarrollo</span>
                </div>
                <div className="flex items-center ml-8">
                  <div className="w-3 h-3 bg-cactus rounded-full mr-3" />
                  <span className="text-sm font-medium text-muted-foreground">Lanzamiento</span>
                </div>
                <div className="flex items-center ml-16">
                  <div className="w-3 h-3 bg-sun-yellow rounded-full mr-3" />
                  <span className="text-sm font-medium text-muted-foreground">Crecimiento</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values List */}
          <div className="space-y-8">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                ¿Por qué elegirnos?
              </h3>
              <p className="text-lg text-muted-foreground">
                Más que un proveedor, somos tu socio estratégico en la 
                transformación digital de tu emprendimiento.
              </p>
            </div>
            
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-accent/10 to-sky-blue/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-terracotta via-transparent to-cactus" />
    </section>
  );
};

export default WhyChooseSection;
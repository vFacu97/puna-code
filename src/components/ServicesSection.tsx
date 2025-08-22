import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Settings, Cloud, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones modernas que impulsan tu presencia digital",
  },
  {
    icon: Settings,
    title: "Automatización",
    description: "Optimizamos tus procesos para que te enfoques en hacer crecer tu negocio",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Infraestructura escalable y segura para tu emprendimiento",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Tech",
    description: "Te acompañamos en la transformación digital de tu proyecto",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Soluciones pensadas para
            <br />
            <span className="text-accent">tu emprendimiento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combinamos tecnología de punta con el conocimiento local para 
            impulsar tu proyecto al siguiente nivel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-background"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-accent/10 to-sky-blue/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-accent" size={32} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Andean-inspired decorative element */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-2 h-2 bg-terracotta rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
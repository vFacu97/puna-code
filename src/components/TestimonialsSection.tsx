import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Fundadora, EcoTienda Online",
    content: "Puna Code transformó por completo nuestra presencia digital. Ahora nuestras ventas online crecen mes a mes.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Carlos Herrera",
    role: "Director, Consultora Norte",
    content: "El equipo no solo entregó lo que prometió, sino que nos enseñó a ser autónomos con nuestras herramientas.",
    rating: 5,
    avatar: "CH",
  },
  {
    name: "Ana Rodríguez",
    role: "CEO, StartUp Salteña",
    content: "La cercanía y profesionalismo de Puna Code nos dio la confianza para dar el salto tecnológico que necesitábamos.",
    rating: 5,
    avatar: "AR",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-card relative">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-terracotta/20 to-transparent transform -skew-y-1" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cactus/20 to-transparent transform skew-y-1" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Casos de
            <span className="text-terracotta"> éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conocé las experiencias de emprendedores que confiaron en nosotros 
            para hacer crecer sus proyectos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background border-border/50"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="text-accent mb-4 opacity-50" size={32} />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-sun-yellow fill-current" 
                      size={16} 
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-sky-blue rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-2 h-8 bg-cactus rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import { Shield, DollarSign, Link2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Blockchain Arbitrum",
    description: "Contratos seguros e verificáveis"
  },
  {
    icon: DollarSign,
    title: "Taxas Reduzidas",
    description: "Até 70% menos que métodos tradicionais"
  },
  {
    icon: Link2,
    title: "Sem Intermediários",
    description: "Relacionamento direto e transparente"
  }
];

export const TechSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-elegant">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

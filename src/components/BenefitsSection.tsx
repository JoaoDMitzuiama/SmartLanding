import { Building2, Home, TrendingUp } from "lucide-react";
import { Check } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Para Locadores",
    color: "bg-blue-500/10 text-blue-600",
    items: [
      "Caução garantida por smart contract",
      "Pagamentos pontuais automatizados",
      "Redução de inadimplência",
      "Histórico transparente de inquilinos"
    ]
  },
  {
    icon: Home,
    title: "Para Locatários",
    color: "bg-success/10 text-success",
    items: [
      "Caução protegida e devolvida automaticamente",
      "Sem fiador ou seguro fiança",
      "Histórico de pagamento na blockchain",
      "Processo de locação simplificado"
    ]
  },
  {
    icon: TrendingUp,
    title: "Para Corretoras",
    color: "bg-accent/10 text-accent",
    items: [
      "Dashboard completo de gestão",
      "Automação de processos burocráticos",
      "Comissões garantidas por smart contract",
      "Relatórios e métricas em tempo real"
    ]
  }
];

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Benefícios para Todos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vantagens exclusivas para cada tipo de usuário
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 border border-border"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{benefit.title}</h3>
                
                <ul className="space-y-4">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

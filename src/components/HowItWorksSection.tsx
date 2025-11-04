import { UserPlus, FileCode, PlayCircle, Activity } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Cadastro",
    description: "Crie sua conta e conecte sua carteira digital",
    color: "bg-primary"
  },
  {
    number: "2",
    icon: FileCode,
    title: "Contrato Inteligente",
    description: "Criação automática do smart contract personalizado",
    color: "bg-success"
  },
  {
    number: "3",
    icon: PlayCircle,
    title: "Execução",
    description: "Pagamentos e obrigações executados automaticamente",
    color: "bg-accent"
  },
  {
    number: "4",
    icon: Activity,
    title: "Monitoramento",
    description: "Acompanhe tudo em tempo real no dashboard",
    color: "bg-warning"
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="funciona" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Como Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e seguro em 4 etapas para revolucionar seus aluguéis
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
                
                <div className="relative bg-card p-6 rounded-2xl shadow-card text-center space-y-4 hover:shadow-elegant transition-all duration-300">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto text-primary-foreground font-bold text-2xl shadow-lg`}>
                    {step.number}
                  </div>
                  
                  <Icon className="w-8 h-8 text-primary mx-auto" />
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

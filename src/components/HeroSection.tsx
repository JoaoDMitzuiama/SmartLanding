import { Button } from "@/components/ui/button";
import { Shield, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-blockchain.png";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Gestão de Aluguéis <span className="bg-gradient-primary bg-clip-text text-transparent">na Blockchain</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              A primeira plataforma que revoluciona o mercado imobiliário com contratos inteligentes, transparência total e segurança garantida pela blockchain Arbitrum.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-1">Caução Protegida</h3>
                <p className="text-sm text-muted-foreground">Smart contracts garantem segurança total</p>
              </div>
              
              <div className="bg-card p-4 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Pagamentos Automatizados</h3>
                <p className="text-sm text-muted-foreground">Sem atraso, sem complicações</p>
              </div>
              
              <div className="bg-card p-4 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">Transparência Total</h3>
                <p className="text-sm text-muted-foreground">Todas as transações auditáveis</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-base" asChild>
                <Link to="/auth?mode=signup&type=broker">
                  <Shield className="w-5 h-5" />
                  Sou Corretor
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/auth?mode=signup&type=tenant">
                  Sou Locador/Locatário
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Blockchain rental management illustration" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

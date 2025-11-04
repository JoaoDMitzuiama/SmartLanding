import { Button } from "@/components/ui/button";
import { UserPlus, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pronto para o Futuro dos Aluguéis?
          </h2>
          
          <p className="text-xl opacity-90">
            Junte-se à revolução blockchain e transforme sua experiência imobiliária hoje mesmo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 text-base font-semibold" 
              asChild
            >
              <Link to="/auth?mode=signup&type=broker">
                <Building2 className="w-5 h-5" />
                Começar como Corretor
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base font-semibold" 
              asChild
            >
              <Link to="/auth?mode=signup&type=tenant">
                <UserPlus className="w-5 h-5" />
                Começar como Locador/Locatário
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

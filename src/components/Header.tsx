import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RentChain</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </Link>
            <Link to="/#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </Link>
            <Link to="/documentacao" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentação
            </Link>
            <Link to="/suporte" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Suporte
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/auth">Login</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/auth?mode=signup">Começar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

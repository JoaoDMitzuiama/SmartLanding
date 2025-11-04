import { Link } from "react-router-dom";
import { Shield, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">RentChain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A primeira plataforma de gestão de aluguéis baseada em blockchain
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#funciona" className="hover:text-foreground transition-colors">Como Funciona</Link></li>
              <li><Link to="/precos" className="hover:text-foreground transition-colors">Preços</Link></li>
              <li><Link to="/seguranca" className="hover:text-foreground transition-colors">Segurança</Link></li>
              <li><Link to="/roadmap" className="hover:text-foreground transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/documentacao" className="hover:text-foreground transition-colors">Documentação Técnica</Link></li>
              <li><Link to="/api" className="hover:text-foreground transition-colors">API Reference</Link></li>
              <li><Link to="/whitepaper" className="hover:text-foreground transition-colors">Whitepaper</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/ajuda" className="hover:text-foreground transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="hover:text-foreground transition-colors">Contato</Link></li>
              <li><Link to="/discord" className="hover:text-foreground transition-colors">Discord</Link></li>
              <li><Link to="/status" className="hover:text-foreground transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 RentChain. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

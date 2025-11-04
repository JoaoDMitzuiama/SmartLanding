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
                  
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
          </p>          
        </div>
      </div>
    </footer>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  Search, 
  Filter,
  Download,
  FileText,
  Settings,
  LogOut,
  TrendingUp
} from "lucide-react";

export default function Contracts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    proposto: true,
    ativo: true,
    emDisputa: true,
    encerrado: false
  });

  const contracts = [
    { 
      id: "#BC001", 
      address: "Rua das Flores, 123", 
      tenant: { name: "Maria Santos", avatar: "MS" },
      status: "Ativo", 
      value: "R$ 2.500,00",
      dueDate: "16/12/2024",
      property: { type: "Apartamento", size: "85 m²" }
    },
    { 
      id: "#BC002", 
      address: "Av. Paulista, 456", 
      tenant: { name: "João Silva", avatar: "JS" },
      status: "Aguardando", 
      value: "R$ 3.200,00",
      dueDate: "05/12/2024",
      property: { type: "Apartamento", size: "120 m²" }
    },
    { 
      id: "#BC003", 
      address: "R. da Consolação, 789", 
      tenant: { name: "Ana Costa", avatar: "AC" },
      status: "Em Disputa", 
      value: "R$ 1.800,00",
      dueDate: "20/12/2024",
      property: { type: "Casa", size: "200 m²" }
    },
    { 
      id: "#BC004", 
      address: "Rua Augusta, 321", 
      tenant: { name: "Pedro Lima", avatar: "PL" },
      status: "Ativo", 
      value: "R$ 2.300,00",
      dueDate: "22/12/2024",
      property: { type: "Apartamento", size: "75 m²" }
    },
    { 
      id: "#BC005", 
      address: "Al. Santos, 654", 
      tenant: { name: "Lucia Ferreira", avatar: "LF" },
      status: "Demanda", 
      value: "R$ 2.800,00",
      dueDate: "30/12/2024",
      property: { type: "Apartamento", size: "95 m²" }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "text-success bg-success/10";
      case "Aguardando": return "text-warning bg-warning/10";
      case "Em Disputa": return "text-destructive bg-destructive/10";
      case "Demanda": return "text-muted-foreground bg-muted";
      default: return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold">ImobiChain</h1>
                <p className="text-xs text-muted-foreground">Contratos Digitais</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                  <span className="text-xs font-medium">🔔</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos" alt="Avatar" className="rounded-full" />
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">Carlos Silva</p>
                <p className="text-xs text-muted-foreground">Administrador</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border min-h-screen p-4 hidden md:block">
          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              <Shield className="w-5 h-5" />
              Dashboard
            </Link>
            <Link to="/contracts" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium">
              <FileText className="w-5 h-5" />
              Contratos
            </Link>
            <Link to="/properties" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              <Shield className="w-5 h-5" />
              Imóveis
            </Link>
            <Link to="/reports" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
              <TrendingUp className="w-5 h-5" />
              Relatórios
            </Link>
            <div className="pt-4 border-t border-border mt-4">
              <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <Settings className="w-5 h-5" />
                Configurações
              </Link>
              <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground w-full">
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">Gerenciamento de Contratos</h2>
              <p className="text-muted-foreground">Gerencie todos os contratos blockchain da sua corretora</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4" />
                Exportar
              </Button>
              <Button variant="hero">
                <FileText className="w-4 h-4" />
                Novo Contrato
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <Card className="p-6 h-fit space-y-6">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filtros
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Status</Label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="proposto" 
                          checked={filters.proposto}
                          onCheckedChange={(checked) => setFilters({...filters, proposto: checked as boolean})}
                        />
                        <Label htmlFor="proposto" className="text-sm cursor-pointer">
                          Proposto <span className="text-muted-foreground">(12)</span>
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="ativo" 
                          checked={filters.ativo}
                          onCheckedChange={(checked) => setFilters({...filters, ativo: checked as boolean})}
                        />
                        <Label htmlFor="ativo" className="text-sm cursor-pointer">
                          Ativo <span className="text-muted-foreground">(247)</span>
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="emDisputa" 
                          checked={filters.emDisputa}
                          onCheckedChange={(checked) => setFilters({...filters, emDisputa: checked as boolean})}
                        />
                        <Label htmlFor="emDisputa" className="text-sm cursor-pointer">
                          Em Disputa <span className="text-muted-foreground">(5)</span>
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="encerrado" 
                          checked={filters.encerrado}
                          onCheckedChange={(checked) => setFilters({...filters, encerrado: checked as boolean})}
                        />
                        <Label htmlFor="encerrado" className="text-sm cursor-pointer">
                          Encerrado <span className="text-muted-foreground">(38)</span>
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">Período</Label>
                    <div className="space-y-2">
                      <Input type="date" className="text-sm" />
                      <Input type="date" className="text-sm" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">Valor Mensal</Label>
                    <div className="space-y-2">
                      <Input type="number" placeholder="R$ Min" className="text-sm" />
                      <Input type="number" placeholder="R$ Max" className="text-sm" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">Tipo de Imóvel</Label>
                    <select className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm">
                      <option>Todos os tipos</option>
                      <option>Apartamento</option>
                      <option>Casa</option>
                      <option>Comercial</option>
                    </select>
                  </div>

                  <Button variant="outline" className="w-full text-sm">
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </Card>

            {/* Contracts List */}
            <div className="lg:col-span-3 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por endereço, locatário ou ID do contrato..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="text-sm text-muted-foreground">
                Mostrando 1-5 de <span className="font-medium">302 contratos</span>
              </div>

              <div className="space-y-4">
                {contracts.map((contract) => (
                  <Link key={contract.id} to={`/contract/${contract.id.replace('#', '')}`}>
                    <Card className="p-6 hover:shadow-elegant transition-all duration-300 cursor-pointer">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                          <p className="text-primary font-semibold mb-1">{contract.id}</p>
                          <p className="text-sm text-foreground font-medium">{contract.address}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {contract.property.type} • {contract.property.size}
                          </p>
                        </div>
                        
                        <div className="col-span-2 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                            {contract.tenant.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{contract.tenant.name}</p>
                            <p className="text-xs text-muted-foreground">Locatário</p>
                          </div>
                        </div>
                        
                        <div className="col-span-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                            {contract.status}
                          </span>
                        </div>
                        
                        <div className="col-span-2 text-center">
                          <p className="font-semibold">{contract.value}</p>
                          <p className="text-xs text-muted-foreground">Valor mensal</p>
                        </div>
                        
                        <div className="col-span-2 text-center">
                          <p className="text-sm">{contract.dueDate}</p>
                          <p className="text-xs text-muted-foreground">
                            {contract.status === "Ativo" ? "Próx. vencimento" : "Data"}
                          </p>
                        </div>
                        
                        <div className="col-span-1 flex justify-end">
                          <Button variant="ghost" size="icon">
                            <span className="text-xl">⋯</span>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center pt-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">Anterior</Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Próxima</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

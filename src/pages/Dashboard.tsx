import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  FileText,
  Settings,
  LogOut
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Contratos Ativos",
      value: "247",
      change: "+12% vs mês anterior",
      trend: "up",
      icon: FileText,
      color: "text-success"
    },
    {
      title: "Valor Total em Caução",
      value: "1,245 ETH",
      change: "+8.2%",
      trend: "up",
      icon: Shield,
      color: "text-primary"
    },
    {
      title: "Contratos com Atraso",
      value: "18",
      change: "Requer atenção",
      trend: "down",
      icon: AlertCircle,
      color: "text-warning"
    },
    {
      title: "Disputas Abertas",
      value: "5",
      change: "Ação urgente",
      trend: "neutral",
      icon: AlertCircle,
      color: "text-destructive"
    }
  ];

  const recentContracts = [
    { id: "#BC001", address: "Rua das Flores, 123", tenant: "Maria Santos", status: "Ativo", value: "R$ 2.500", date: "16/12/2024" },
    { id: "#BC002", address: "Av. Paulista, 456", tenant: "João Silva", status: "Aguardando", value: "R$ 3.200", date: "05/12/2024" },
    { id: "#BC003", address: "R. da Consolação, 789", tenant: "Ana Costa", status: "Em Disputa", value: "R$ 1.800", date: "20/12/2024" },
    { id: "#BC004", address: "Rua Augusta, 321", tenant: "Pedro Lima", status: "Ativo", value: "R$ 2.300", date: "22/12/2024" },
    { id: "#BC005", address: "Al. Santos, 654", tenant: "Lucia Ferreira", status: "Demanda", value: "R$ 2.800", date: "30/12/2024" }
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
            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium">
              <Shield className="w-5 h-5" />
              Dashboard
            </Link>
            <Link to="/contracts" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
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
          <div>
            <h2 className="text-2xl font-bold mb-1">Dashboard Administrativo</h2>
            <p className="text-muted-foreground">Monitore seus contratos blockchain em tempo real</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <div className="flex items-center gap-1 text-sm">
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : stat.trend === "down" ? (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    ) : null}
                    <span className={stat.trend === "up" ? "text-success" : stat.trend === "down" ? "text-destructive" : "text-muted-foreground"}>
                      {stat.change}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Chart Section */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Evolução de Contratos</h3>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Novos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span className="text-muted-foreground">Encerrados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <span className="text-muted-foreground">Em Disputa</span>
                </div>
              </div>
            </div>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Gráfico de linha (será implementado com biblioteca de charts)</p>
            </div>
          </Card>

          {/* Recent Contracts */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Contratos Recentes</h3>
              <Button variant="default" asChild>
                <Link to="/contracts">Ver Todos os Contratos</Link>
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID CONTRATO</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ENDEREÇO</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">STATUS</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">LOCATÁRIO</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">VALOR MENSAL</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">PRÓXIMO VENCIMENTO</th>
                  </tr>
                </thead>
                <tbody>
                  {recentContracts.map((contract, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer">
                      <td className="py-4 px-4">
                        <Link to={`/contract/${contract.id}`} className="text-primary hover:underline font-medium">
                          {contract.id}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-sm">{contract.address}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                          {contract.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm">{contract.tenant}</td>
                      <td className="py-4 px-4 text-sm font-medium">{contract.value}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{contract.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}

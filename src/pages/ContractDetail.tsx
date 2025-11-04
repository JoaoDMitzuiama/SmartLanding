import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  ArrowLeft,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  Home,
  MapPin,
  Calendar,
  DollarSign,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink
} from "lucide-react";

export default function ContractDetail() {
  const { id } = useParams();

  const contractData = {
    id: `#BC${id}`,
    address: "Rua das Flores, 123, Apt 45",
    neighborhood: "Jardins, São Paulo - SP",
    status: "Ativo",
    value: "1.25 ETH",
    valueInReais: "R$ 7,500.00",
    depositValue: "R$ 7,500.00",
    type: "Apartamento",
    size: "85 m²",
    rooms: "3 quartos • 2 banheiros",
    tenant: {
      name: "Roberto Oliveira",
      document: "***.**5.923-**",
      phone: "(11) 98888-1234",
      email: "roberto@email.com",
      avatar: "RO"
    },
    landlord: {
      name: "Maria Santos",
      document: "***.**8.450-**",
      phone: "(11) 98888-5678",
      email: "maria@email.com"
    },
    dates: {
      proposal: "15 de Setembro, 2024",
      start: "1 de Outubro, 2024",
      nextDue: "15 de Dezembro, 2024 (em 8 dias)",
      end: "1 de Outubro, 2025"
    },
    payments: [
      { date: "16/11/2024", value: "R$ 2.500,00", status: "Pago", txHash: "0xf73...CA97" },
      { date: "15/10/2024", value: "R$ 2.500,00", status: "Pago", txHash: "0x8a1...DE52" },
      { date: "15/09/2024", value: "R$ 2.500,00", status: "Pendente", txHash: "-" }
    ],
    blockchainEvents: [
      { event: "ContratoIniciado", date: "01/10/2024 14:32", txHash: "0x92c...A573" },
      { event: "PagamentoRecebido", date: "16/10/2024 08:15", txHash: "0x8a1...DE52" },
      { event: "PagamentoRecebido", date: "16/11/2024 09:22", txHash: "0xf73...CA97" }
    ]
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
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/contracts">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <div>
                <h2 className="text-2xl font-bold mb-1">Contrato {contractData.id}</h2>
                <p className="text-muted-foreground">{contractData.address}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Property Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Property Image & Info */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800" 
                    alt="Property" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{contractData.address}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {contractData.neighborhood}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tipo</p>
                      <p className="font-semibold">{contractData.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Área</p>
                      <p className="font-semibold">{contractData.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Cômodos</p>
                      <p className="font-semibold text-sm">{contractData.rooms}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Status Card */}
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Status do Contrato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      <div>
                        <p className="font-semibold text-success">Ativo</p>
                        <p className="text-sm text-muted-foreground">Proposto em {contractData.dates.proposal}</p>
                      </div>
                    </div>
                    <Badge variant="default" className="bg-success">●</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Aluguel Ativo desde</p>
                      <p className="font-semibold">{contractData.dates.start}</p>
                    </div>
                    <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                      <p className="text-sm text-muted-foreground mb-1">Próximo vencimento</p>
                      <p className="font-semibold text-warning">{contractData.dates.nextDue}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Encerramento previsto</p>
                    <p className="font-semibold">{contractData.dates.end}</p>
                  </div>
                </div>
              </Card>

              {/* Payment History */}
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Histórico de Pagamentos
                </h3>
                
                <div className="space-y-3">
                  {contractData.payments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          payment.status === "Pago" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                        }`}>
                          {payment.status === "Pago" ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-semibold">{payment.date}</p>
                          <p className="text-sm text-muted-foreground">{payment.status}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{payment.value}</p>
                        {payment.txHash !== "-" && (
                          <a 
                            href={`https://arbiscan.io/tx/${payment.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline flex items-center gap-1 justify-end"
                          >
                            tx#{payment.txHash} <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Blockchain Events */}
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Eventos da Blockchain
                </h3>
                
                <div className="space-y-3">
                  {contractData.blockchainEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">{event.event}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <a 
                        href={`https://arbiscan.io/tx/${event.txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                      >
                        txHash <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Parties & Actions */}
            <div className="space-y-6">
              {/* Deposit Info */}
              <Card className="p-6 bg-gradient-primary text-primary-foreground">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Caução
                </h3>
                <div className="space-y-2">
                  <p className="text-3xl font-bold">{contractData.value}</p>
                  <p className="opacity-90">{contractData.valueInReais}</p>
                  <div className="pt-4 mt-4 border-t border-primary-foreground/20">
                    <p className="text-sm opacity-75 mb-1">Bloqueado no Smart Contract</p>
                    <p className="text-xs opacity-60">🔒 Certificado CertUP...247.zi</p>
                  </div>
                </div>
              </Card>

              {/* Tenant Info */}
              <Card className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Partes Envolvidas
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        {contractData.tenant.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{contractData.tenant.name}</p>
                        <p className="text-xs text-muted-foreground">Locatário</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm ml-15">
                      <p className="text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {contractData.tenant.document}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {contractData.tenant.phone}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {contractData.tenant.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center font-semibold">
                        MS
                      </div>
                      <div>
                        <p className="font-semibold">{contractData.landlord.name}</p>
                        <p className="text-xs text-muted-foreground">Locador</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm ml-15">
                      <p className="text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {contractData.landlord.document}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {contractData.landlord.phone}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">ImobiChain</p>
                        <p className="text-xs text-muted-foreground">Smart Contract Responsável</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <Card className="p-6 space-y-3">
                <h3 className="font-bold mb-4">Ações</h3>
                <Button className="w-full" variant="hero">
                  <DollarSign className="w-4 h-4" />
                  Registrar Pagamento
                </Button>
                <Button className="w-full" variant="warning">
                  <AlertCircle className="w-4 h-4" />
                  Reportar Disputa
                </Button>
                <Button className="w-full" variant="destructive">
                  <FileText className="w-4 h-4" />
                  Encerrar Contrato
                </Button>
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4" />
                  Ver no Explorer
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

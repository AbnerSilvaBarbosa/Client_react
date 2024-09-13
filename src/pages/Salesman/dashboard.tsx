import { useState } from "react";
import { MoreVertical, X } from "lucide-react";
import green_kart from "../../assets/green-kart.png";
import money_icon from "../../assets/fi-sr-money.svg";
import { NavBar } from '@/components/navBar';

export function Dashboard() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const [vendasAtuais, ] = useState(200);
  const metaMensal = 5000; // No futuro puxar a meta do usuário no banco de dados
  const diasRestantes = 10; // Setar para calcular automáticamente

  const progressoMeta = (vendasAtuais / metaMensal) * 100;

  const metaRestanteDiaria = (metaMensal - vendasAtuais) / diasRestantes;

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6">
      <div className="max-w-lg mx-auto">
        <NavBar userRoute="/dash" salesManRoute="/salesMan" isManagerPage={false}/>
      </div>

      <div className="space-y-4">
        
        {/* Barra de Progresso da Meta */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl text-gray-700 font-semibold mb-2">Progresso da Meta</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progressoMeta}%` }}
            ></div>
          </div>
          <p className="mt-2">Você atingiu {progressoMeta.toFixed(2)}% da meta mensal.</p>
        </div>

        {/* Total de Ganhos */}
      <div className="border rounded-lg p-4">
        <div className="flex justify-between">
          <div className="flex justify-between space-x-2">
            <img src={money_icon} alt="blue_money_icon" />
            <p className="text-[#777980]"> Total de Ganhos</p>
          </div>
          <button onClick={toggleDetails}>
            <MoreVertical className="text-gray-500" />
          </button>
        </div>
        <h2 className="text-3xl font-semibold ml-1">R$ 2.861</h2>
      </div>

      {/* Card Comissão */}
      {showDetails && (
        <div className="borderinset-1 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-xl w-11/20 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                Cálculo da sua comissão
              </p>
              <button onClick={toggleDetails}>
                <X className="text-gray-500" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              5% de comissão das vendas mensais + 50% da comissão se a meta
              for atingida + R$ 100 para 10 produtos vendidos com a maior
              margem*
            </p>
            <p className="text-sm text-green-600">
              10% <span className="text-gray-500">⬆</span> + 15 vendas
            </p>
          </div>
        </div>
      )}

        {/* Meta diária */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Meta Diária</h2>
          <p>
            Você precisa vender <strong>R${metaRestanteDiaria.toFixed(2)}</strong> por dia para atingir sua meta mensal.
          </p>
        </div>

        {/* Estatísticas de Vendas */}
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Vendas atuais</p>
          <h2 className="text-2xl font-bold">R${vendasAtuais}</h2>
          <p className="text-xs text-green-600">Progresso até agora</p>
        </div>

      </div>

      {/* Meta mensal */}
      <div className="border rounded-lg p-4">
        <div className="border-[#E0E2E7] rounded-lg">
          <div className="flex justify-between">
            <div className="flex justify-between space-x-2">
              <img src={green_kart} alt="green_kart_icon" />
              <p className="text-[#777980]"> Meta do Mês</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold">R$59.549,00</h2>
        </div>
      </div>

    </div>
  );
}

export function CategorySales({ icon, name, sales, amount, percentageChange }: { icon: any, name: string, sales: number, amount: number, percentageChange: number }) {
  const isPositive = percentageChange > 0;
  const isNegative = percentageChange < 0;

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      {/* Ícone e informações de vendas */}
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-4">
          {/* Aqui você pode substituir pelo seu ícone específico */}
          {icon}
        </div>
        <div>
          <h2 className="text-sm font-medium">{name}</h2>
          <p className="text-xs text-gray-500">{sales} Vendas</p>
        </div>
      </div>

      {/* Informações de valor e mudança percentual */}
      <div className="flex items-center">
        <span className="text-sm font-semibold mr-2">${amount}</span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isPositive
              ? 'bg-green-100 text-green-600'
              : isNegative
              ? 'bg-red-100 text-red-600'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </span>
      </div>
    </div>
  );
}
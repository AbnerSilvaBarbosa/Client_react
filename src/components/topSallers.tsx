interface SalespersonCardProps {
  name: string;
  date: string;
  progress: number; // De 0 a 100
  avatar?: string; // Caminho para a imagem do avatar (opcional)
}

export function SalespersonCard({ name, date, progress, avatar }: SalespersonCardProps) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md mb-5">
      {/* Avatar do vendedor */}
      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full rounded-full" />
        ) : (
          <span className="text-xl text-purple-500">👤</span> // Ícone de fallback se não houver avatar
        )}
      </div>

      {/* Detalhes do vendedor */}
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">Vendedor(a) desde {date}</p>

        {/* Barra de progresso */}
        <div className="mt-2 h-4 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-teal-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export function ProductItem({ imageSrc, name, category, price }: { imageSrc: string, name: string, category: string, price: string }) {
    return (
      <div className="flex items-center justify-between py-4">
        {/* Imagem do produto */}
        <div className="flex items-start">
          <img src={imageSrc} alt={name} className="w-12 h-12 rounded-md mr-4" />
          {/* Informações do produto */}
          <div>
            <h2 className="text-sm font-medium text-black">{name}</h2>
            <p className="text-xs text-gray-500">{category}</p>
          </div>
        </div>
  
        {/* Preço do produto */}
        <span className="text-sm font-semibold text-black">{price}</span>
      </div>
    );
  }
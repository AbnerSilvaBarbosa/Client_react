import LaVieEstBellePerfume from '../assets/produtos/LaVieEstBellePerfum.png';
import Cerave from '../assets/produtos/CeraveImage.png';
import { ProductCard } from "../components/productCard";

export function RecentSearches() {
  const recentSearches = [
    {
      id: 1,
      name: "La Vie Est Belle Lancôme",
      category: "Perfume",
      price: "R$767,80",
      image: LaVieEstBellePerfume,
      installments: "Estoque: 100",
    },
    {
      id: 2,
      name: "CeraVe Eye Repair",
      category: "Skincare",
      price: "R$83,90",
      image: Cerave,
      installments: "Estoque: 100",
    },
    {
      id: 3,
      name: "CeraVe Eye Repair",
      category: "Skincare",
      price: "R$83,90",
      image: Cerave,
      installments: "Estoque: 100",
    },
  ];

  return (  
    <div className="recent-searches relative">  
      <h2 className="font-bold text-lg mb-4">Pesquisas Recentes</h2>  
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-6 z-[-1]">  
          {recentSearches.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              installments={product.installments}
            />
          ))}  
        </div>
      </div>  
    </div>  
  );
}
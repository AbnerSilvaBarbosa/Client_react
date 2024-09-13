// src/components/PopularProducts.jsx
import { Heart } from "lucide-react";
import LaVieEstBellePerfume from '../assets/produtos/LaVieEstBellePerfum.png';
import Shiseido from '../assets/produtos/ShiseidoImage.png';
import Cerave from '../assets/produtos/CeraveImage.png';

export function PopularProducts() {
  const popularProducts = [
    {
      id: 1,
      name: "La Vie Est Belle Lancôme Eau de Parfum",
      category: "Perfume",
      price: "R$767,80",
      installments: "Comissão de R$ 76,78",
      image: LaVieEstBellePerfume,
    },
    {
      id: 2,
      name: "Shiseido BB For Sports FPS 50 Medium",
      category: "Maquiagem",
      price: "R$318,90",
      installments: "Comissão de R$ 31,89",
      image: Shiseido,
    },
    {
      id: 3,
      name: "CeraVe Eye Repair",
      category: "Skincare",
      price: "R$83,90",
      installments: "Comissão de R$ 8,39",
      image: Cerave,
    },
  ];

  return (
    <div className="popular-products mt-8">
      <h2 className="font-bold text-lg mb-4">Popular Products</h2>
      <div>
        {popularProducts.map((item) => (
          <div key={item.id} className="border-b pb-4 mb-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold text-md">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="font-bold">{item.price}</p>
                <p className="text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1 inline-block">{item.installments}</p>
              </div>
              <Heart className="ml-auto text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

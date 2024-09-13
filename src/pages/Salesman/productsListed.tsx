import { useState } from "react";
import { ProductCard } from "../../components/productCard";
import LaVieEstBellePerfume from '../../assets/produtos/LaVieEstBellePerfum.png';
import JeanPaulPerfum from '../../assets/produtos/JeanPaulPerfum.png';
import OrganzaPerfum from  '../../assets/produtos/OrganzaPerfum.png';
import Godness from '../../assets/produtos/GoddessPerfum.png';
import Scandall from '../../assets/produtos/ScandallPerfum.png';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  installments: string;
  relatedProducts: Product[];
}

const products: Product[] = [
  {
    id: 1,
    name: "La Vie Est Belle Lancôme",
    category: "Perfume",
    price: "R$767,80",
    image: LaVieEstBellePerfume,
    installments: "R$54,00 de comissão",
    relatedProducts: [
      {
        id: 3,
        name: "Jean Paul Gaultier Divine",
        category: "Perfume",
        price: "R$54,00",
        image: JeanPaulPerfum,
        installments: "R$54,00 de comissão",
        relatedProducts: [],
      },
      {
        id: 4,
        name: "Organza Givenchy Parfum",
        category: "Perfume",
        price: "R$53,20",
        image: OrganzaPerfum,
        installments: "R$53,20 de comissão",
        relatedProducts: [],
      },
    ],
  },
  {
    id: 2,
    name: "Goddess Burberry",
    category: "Perfume",
    price: "R$767,80",
    image: Godness,
    installments: "R$76,78 de comissão",
    relatedProducts: [
      {
        id: 5,
        name: "Scandal Jean Paul Gaultier",
        category: "Perfume",
        price: "R$767,80",
        image: Scandall,
        installments: "R$76,78 de comissão",
        relatedProducts: [],
      },
    ],
  },
  {
    id: 6,
    name: "La Vie Est Belle Lancôme",
    category: "Perfume",
    price: "R$767,80",
    image: LaVieEstBellePerfume,
    installments: "R$54,00 de comissão",
    relatedProducts: [
      {
        id: 7,
        name: "Jean Paul Gaultier Divine",
        category: "Perfume",
        price: "R$54,00",
        image: JeanPaulPerfum,
        installments: "R$54,00 de comissão",
        relatedProducts: [],
      },
      {
        id: 8,
        name: "Organza Givenchy Parfum",
        category: "Perfume",
        price: "R$53,20",
        image: OrganzaPerfum,
        installments: "R$53,20 de comissão",
        relatedProducts: [],
      },
    ],
  },
  {
    id: 9,
    name: "Goddess Burberry",
    category: "Perfume",
    price: "R$767,80",
    image: Godness,
    installments: "R$76,78 de comissão",
    relatedProducts: [
      {
        id: 10,
        name: "Scandal Jean Paul Gaultier",
        category: "Perfume",
        price: "R$767,80",
        image: Scandall,
        installments: "R$76,78 de comissão",
        relatedProducts: [],
      },
    ],
  },
  {
    id: 11,
    name: "Goddess Burberry",
    category: "Perfume",
    price: "R$767,80",
    image: Godness,
    installments: "R$76,78 de comissão",
    relatedProducts: [
      {
        id: 12,
        name: "Scandal Jean Paul Gaultier",
        category: "Perfume",
        price: "R$767,80",
        image: Scandall,
        installments: "R$76,78 de comissão",
        relatedProducts: [],
      },
    ],
  },
];

export function ProductsListed() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseRelatedProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-full mx-auto p-4 relative">
  
      {/* Lista de produtos principais */}
      <div className={`grid grid-cols-2 gap-6`}>
        {products.map((item) => (
          <div key={item.id} className="relative">
            <div
              className={`relative ${selectedProduct && selectedProduct.id !== item.id ? "blur-lg" : ""}`}
              onClick={() => handleCardClick(item)}
            >
              <ProductCard
                name={item.name}
                category={item.category}
                price={item.price}
                image={item.image}
                installments={item.installments}
              />
            </div>
          </div>
        ))}
      </div>
  
      {/* Produtos relacionados fora do componente pai */}
      {selectedProduct && (
        <div className="fixed inset-x-0 bottom-0 z-10 bg-white p-4 shadow-lg rounded-lg border-2">
          <h2 className="text-xl font-bold mb-4">Produtos Relacionados</h2>
          <div className="grid grid-cols-2 gap-4">
            {selectedProduct.relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                name={relatedProduct.name}
                category={relatedProduct.category}
                price={relatedProduct.price}
                image={relatedProduct.image}
                installments={relatedProduct.installments}
              />
            ))}
          </div>
          <button
            onClick={handleCloseRelatedProducts}
            className="p-2 mt-4 bg-red-500 text-white rounded-md"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}

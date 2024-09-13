import { CategorySales } from "@/components/cagorySales";
import { ProductItem } from "@/components/productItem";
import { Shirt } from "lucide-react";
import { NavBar } from '@/components/navBar';
import PerfumeA from "../../assets/perfumeA.png"
import PerfumeB from "../../assets/perfumeB.png"

export function ProductAndCategori() {
    return (
        <div className="p-5">
            <div className="max-w-lg mx-auto">
                <NavBar userRoute="/manager" salesManRoute="/manager/ProductAndCategori" isManagerPage={true} />
            </div>

            <div className="p-5 mt-5 border-2 rounded-md">
                <div>
                    <h1 className="text-xl">Top Categorias</h1>
                    <h2 className="text-[#777980]">Categorias mais vendidas comparado ao último mês</h2>
                </div>


                <div className="mt-5 max-h-64 overflow-y-auto">
                    <CategorySales
                        icon={<Shirt />}
                        name="Perfumes"
                        sales={340}
                        amount={17678}
                        percentageChange={12}
                    />
                    <CategorySales
                        icon={<Shirt />}
                        name="Maquiagem"
                        sales={100}
                        amount={15500}
                        percentageChange={-5}
                    />
                    <CategorySales
                        icon={<Shirt />}
                        name="Corpo"
                        sales={50}
                        amount={10500}
                        percentageChange={0}
                    />
                    <CategorySales
                        icon={<Shirt />}
                        name="Cabelo"
                        sales={147}
                        amount={8456}
                        percentageChange={19}
                    />
                    <CategorySales
                        icon={<Shirt />}
                        name="Perfumes"
                        sales={340}
                        amount={17678}
                        percentageChange={12}
                    />
                    <CategorySales
                        icon={<Shirt />}
                        name="Perfumes"
                        sales={340}
                        amount={17678}
                        percentageChange={12}
                    />
                </div>

            </div>

            <div className="p-5 mt-5 border-2 rounded-md">
                <div>
                    <h1 className="text-xl">Top Produtos</h1>
                    <h2 className="text-[#777980]">Melhores produtos em um período de tempo</h2>
                </div>


                <div className="mt-5 max-h-64 overflow-y-auto">
                    <ProductItem
                        imageSrc={PerfumeA}
                        name="La Vie Est Belle Lancôme Eau de Parfum"
                        category="Perfume"
                        price="R$1.767,8"
                    />
                    <ProductItem
                        imageSrc={PerfumeB}
                        name="La Nuit Trésor Lancôme Eau de Parfum"
                        category="Perfume"
                        price="R$1.550,0"
                    />
                </div>

            </div>
        </div>
    )
}
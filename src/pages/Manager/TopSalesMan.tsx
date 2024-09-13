import { SalespersonCard } from "@/components/topSallers";
import { NavBar } from "../../components/navBar";

export function TopSalesMans() {
    return (
        <div className="p-5">
            <div className="">
                <NavBar userRoute="/manager" salesManRoute="/manager/ProductAndCategori" isManagerPage={true} />
            </div>

            <div className="p-5 mt-5 border-2 rounded-md">
                <div className="mb-5">
                    <h1 className="text-xl">Top Sellers</h1>
                    <h2 className="text-[#777980]">Top seller no mês</h2>
                </div>

                <SalespersonCard name="Samuel" date="08/10/2007" progress={60} />
                <SalespersonCard name="Maria" date="12/03/2015" progress={80} />
                <SalespersonCard name="João" date="01/08/2020" progress={40} />
                <SalespersonCard name="Ana" date="15/05/2018" progress={90} />
                <SalespersonCard name="Carlos" date="20/02/2012" progress={70} />
                <SalespersonCard name="Fernanda" date="30/11/2016" progress={50} />
                <SalespersonCard name="Bruno" date="05/04/2019" progress={65} />
                <SalespersonCard name="Helena" date="17/07/2014" progress={85} />
                <SalespersonCard name="Lucas" date="25/01/2021" progress={35} />
                <SalespersonCard name="Diana" date="10/09/2009" progress={95} />
            </div>
        </div>
    )
}
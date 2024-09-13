import green_kart from "../../assets/green-kart.png";
import arrow_green from "../../assets/fi-rr-caret-up.png";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, CartesianGrid, Line, LineChart, XAxis,BarChart, LabelList } from "recharts";
import { NavBar } from '@/components/navBar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function Manager() {
  return (
    <div className="p-5">
      <div className="max-w-lg mx-auto">
        <NavBar userRoute="/manager" salesManRoute="/manager/ProductAndCategori" isManagerPage={true} />
      </div>

      {/* Card */}
      <div className="border-2 border-[#E0E2E7] rounded-lg mt-10 p-5">
        <div className="flex">
          <div>
            <img src={green_kart} alt="green_kart_icon" />
          </div>
          <p className="text-[#777980] mb-2"> Meta de Vendas</p>
        </div>
        <h2 className="text-3xl font-semibold ml-1">286.199</h2>

        <div className="flex text-center items-center text-sm mt-4 ml-1">
          <p className="text-[#1A9882] font-bold">9.43%</p>
          <div>
            <img src={arrow_green} alt="green_kart_icon" />
          </div>
          <p className="text-[#858D9D]">+ 24.671 vendas do que mês passado</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Tabs className="mt-10 mb-10" defaultValue="12_Months">
            <TabsList>
            <TabsTrigger value="12_Months">12 Months</TabsTrigger>
            <TabsTrigger value="30_Days">30 Days</TabsTrigger>
            <TabsTrigger value="7_Days">7 Days</TabsTrigger>
            <TabsTrigger value="24_Hours">24 Hours</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Desempenho da Filial - MG_21</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="w-full mt-5">
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <h2 className="text-[#7D8895] text-xl">Entradas:</h2>
              <h2 className="ml-auto text-xl">$8.5k</h2>
            </div>

            <div className="flex">
              <h2 className="text-[#7D8895] text-xl">Saidas:</h2>
              <h2 className="ml-auto text-xl">$3.2k</h2>
            </div>

            <div className="flex">
              <h2 className="text-xl">Total:</h2>
              <h2 className="ml-auto text-xl text-[#94C3F6]">$11.7k</h2>
            </div>
          </div>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho Mensal</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                {/* Definindo o gradiente */}
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#50C474" />
                    <stop offset="100%" stopColor="#128E38" />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                {/* Aplicando o gradiente e adicionando o LabelList */}
                <Bar dataKey="desktop" fill="url(#colorGradient)" radius={8}>
                  <LabelList
                    dataKey="desktop"
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
    </Card>

      </div>
    </div>
  );
}

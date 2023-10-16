import ChartArea from "../Components/Common/ChartArea";
import ChartBar from "../Components/Common/ChartBar";
import ChartLine from "../Components/Common/ChartLine";
import { ChartType } from "../Types";

const data: ChartType[] = [
    {
        name: "Mar",
        investment: 100000,
        revenue: 10401,
    },
    {
        name: "Apr",
        investment: 200000,
        revenue: 24500,
    },
    {
        name: "May",
        investment: 500000,
        revenue: 67010,
    },
    {
        name: "Jun",
        investment: 500000,
        revenue: 40405,
    },
    {
        name: "Jul",
        investment: 600000,
        revenue: 50900,
    },
    {
        name: "Aug",
        investment: 700000,
        revenue: 61000,
    },
];

export default function Dashboard() {
    return (
        <div className="md:w-4/5 m-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 p-2 py-16">
            <div className="col-span-1 h-96 flex flex-col justify-center items-center gap-6">
                <h1 className="text-3xl text-red-500 font-bold text-center">
                    A demo of Line Chart
                </h1>
                <ChartLine data={data} />
            </div>
            <div className="col-span-1 h-96 flex flex-col justify-center items-center gap-6">
                <h1 className="text-3xl text-red-500 font-bold text-center">
                    A demo of Bar Chart
                </h1>
                <ChartBar data={data} />
            </div>
            <div className="col-span-2 h-96 flex flex-col justify-center items-center gap-6">
                <h1 className="text-3xl text-red-500 font-bold text-center">
                    A demo of Area Chart
                </h1>
                <ChartArea data={data} />
            </div>
        </div>
    );
}

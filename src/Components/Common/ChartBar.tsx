import {
    Bar,
    BarChart,
    CartesianGrid,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { ChartType } from "../../Types";

export default function ChartBar({ data }: { data: ChartType[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                    dataKey="revenue"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                    dataKey="investment"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

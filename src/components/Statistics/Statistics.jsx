import React from "react";
import { useLoaderData } from "react-router-dom";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const chartData = useLoaderData();

    const data = chartData.data;
    return (
        <div className="container">
            <ResponsiveContainer aspect={2.1}>
                <AreaChart
                    // width={300}
                    // height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        fill="var(--primary)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;

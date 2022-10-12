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
        <ResponsiveContainer className="container" width={800} height={400}>
            <AreaChart
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
    );
};

export default Statistics;

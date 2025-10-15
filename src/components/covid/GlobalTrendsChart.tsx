import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan 2023", cases: 45000000, deaths: 520000, recovered: 43500000 },
  { month: "Feb 2023", cases: 42000000, deaths: 480000, recovered: 40800000 },
  { month: "Mar 2023", cases: 38000000, deaths: 440000, recovered: 37200000 },
  { month: "Apr 2023", cases: 35000000, deaths: 410000, recovered: 34100000 },
  { month: "May 2023", cases: 32000000, deaths: 390000, recovered: 31200000 },
  { month: "Jun 2023", cases: 29000000, deaths: 360000, recovered: 28300000 },
  { month: "Jul 2023", cases: 27000000, deaths: 340000, recovered: 26400000 },
  { month: "Aug 2023", cases: 25000000, deaths: 320000, recovered: 24500000 },
  { month: "Sep 2023", cases: 23000000, deaths: 300000, recovered: 22600000 },
  { month: "Oct 2023", cases: 21000000, deaths: 280000, recovered: 20700000 },
  { month: "Nov 2023", cases: 19500000, deaths: 265000, recovered: 19200000 },
  { month: "Dec 2023", cases: 18000000, deaths: 250000, recovered: 17700000 },
];

const GlobalTrendsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Global COVID-19 Trends</CardTitle>
        <CardDescription>Monthly cases, deaths, and recoveries over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="cases" 
              stroke="hsl(var(--chart-3))" 
              strokeWidth={2}
              name="Cases"
            />
            <Line 
              type="monotone" 
              dataKey="deaths" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              name="Deaths"
            />
            <Line 
              type="monotone" 
              dataKey="recovered" 
              stroke="hsl(var(--chart-4))" 
              strokeWidth={2}
              name="Recovered"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default GlobalTrendsChart;

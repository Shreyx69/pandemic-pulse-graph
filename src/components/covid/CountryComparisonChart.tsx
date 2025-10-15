import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { country: "USA", cases: 103436829, deaths: 1123836, recovered: 100500000 },
  { country: "India", cases: 44690738, deaths: 530779, recovered: 44100000 },
  { country: "France", cases: 38997490, deaths: 162779, recovered: 38800000 },
  { country: "Germany", cases: 38437756, deaths: 174979, recovered: 38200000 },
  { country: "Brazil", cases: 37519960, deaths: 699276, recovered: 36800000 },
  { country: "Japan", cases: 33320438, deaths: 74694, recovered: 33200000 },
  { country: "South Korea", cases: 30615522, deaths: 34141, recovered: 30500000 },
  { country: "Italy", cases: 25603510, deaths: 190782, recovered: 25400000 },
];

const CountryComparisonChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Country Comparison</CardTitle>
        <CardDescription>Total cases, deaths, and recoveries by country</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="country" 
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
            <Bar dataKey="cases" fill="hsl(var(--chart-3))" name="Cases" />
            <Bar dataKey="deaths" fill="hsl(var(--chart-1))" name="Deaths" />
            <Bar dataKey="recovered" fill="hsl(var(--chart-4))" name="Recovered" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CountryComparisonChart;

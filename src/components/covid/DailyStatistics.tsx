import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Dec 1", newCases: 450000, newDeaths: 5200 },
  { date: "Dec 5", newCases: 480000, newDeaths: 5400 },
  { date: "Dec 10", newCases: 520000, newDeaths: 5800 },
  { date: "Dec 15", newCases: 495000, newDeaths: 5500 },
  { date: "Dec 20", newCases: 470000, newDeaths: 5300 },
  { date: "Dec 25", newCases: 440000, newDeaths: 5000 },
  { date: "Dec 30", newCases: 410000, newDeaths: 4700 },
  { date: "Jan 5", newCases: 390000, newDeaths: 4500 },
  { date: "Jan 10", newCases: 370000, newDeaths: 4300 },
  { date: "Jan 15", newCases: 350000, newDeaths: 4100 },
];

const DailyStatistics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily New Cases & Deaths</CardTitle>
        <CardDescription>Daily statistics showing new COVID-19 cases and deaths</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDeaths" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
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
            <Area 
              type="monotone" 
              dataKey="newCases" 
              stroke="hsl(var(--chart-2))" 
              fillOpacity={1} 
              fill="url(#colorCases)"
              name="New Cases"
            />
            <Area 
              type="monotone" 
              dataKey="newDeaths" 
              stroke="hsl(var(--chart-1))" 
              fillOpacity={1} 
              fill="url(#colorDeaths)"
              name="New Deaths"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DailyStatistics;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Recovered", value: 98.3 },
  { name: "Deaths", value: 0.9 },
  { name: "Active", value: 0.8 },
];

const COLORS = [
  "hsl(var(--chart-4))",
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
];

const RecoveryRateChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Global Recovery Rate</CardTitle>
          <CardDescription>Percentage distribution of total cases</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
          <CardDescription>Analysis of recovery trends and patterns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Recovery Rate Trends</h3>
            <p className="text-sm text-muted-foreground">
              The global recovery rate stands at 98.3%, showing significant improvement from earlier phases of the pandemic.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Mortality Analysis</h3>
            <p className="text-sm text-muted-foreground">
              The case fatality rate has decreased to 0.9%, reflecting improved treatment protocols and healthcare responses.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Active Cases</h3>
            <p className="text-sm text-muted-foreground">
              Active cases now represent only 0.8% of total cases, indicating successful containment measures globally.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Regional Variations</h3>
            <p className="text-sm text-muted-foreground">
              Recovery rates vary by region, with developed countries showing higher recovery percentages due to better healthcare infrastructure.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecoveryRateChart;

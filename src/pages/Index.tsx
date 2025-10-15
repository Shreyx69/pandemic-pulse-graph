import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Users, TrendingUp, AlertCircle } from "lucide-react";
import GlobalTrendsChart from "@/components/covid/GlobalTrendsChart";
import CountryComparisonChart from "@/components/covid/CountryComparisonChart";
import DailyStatistics from "@/components/covid/DailyStatistics";
import RecoveryRateChart from "@/components/covid/RecoveryRateChart";

const Index = () => {
  const stats = [
    {
      title: "Total Cases",
      value: "768.9M",
      change: "+2.4%",
      icon: Activity,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      title: "Total Deaths",
      value: "6.9M",
      change: "+0.8%",
      icon: AlertCircle,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      title: "Recovered",
      value: "756.2M",
      change: "+3.1%",
      icon: TrendingUp,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      title: "Active Cases",
      value: "5.8M",
      change: "-1.2%",
      icon: Users,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">COVID-19 Global Analysis Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive analysis and visualization of COVID-19 data worldwide
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-chart-1' : 'text-chart-4'}`}>
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Charts */}
        <Tabs defaultValue="trends" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="trends">Global Trends</TabsTrigger>
            <TabsTrigger value="comparison">Country Comparison</TabsTrigger>
            <TabsTrigger value="daily">Daily Statistics</TabsTrigger>
            <TabsTrigger value="recovery">Recovery Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-4">
            <GlobalTrendsChart />
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <CountryComparisonChart />
          </TabsContent>

          <TabsContent value="daily" className="space-y-4">
            <DailyStatistics />
          </TabsContent>

          <TabsContent value="recovery" className="space-y-4">
            <RecoveryRateChart />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

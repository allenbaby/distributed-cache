import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Clock, Server } from "lucide-react";

const metrics = [
  {
    name: "Throughput",
    value: 200000,
    unit: "ops/sec",
    progress: 95,
    icon: Zap,
    color: "cyber-amber",
    description: "Operations per second in benchmark cluster"
  },
  {
    name: "Latency",
    value: 0.5,
    unit: "ms",
    progress: 90,
    icon: Clock,
    color: "cyber-green", 
    description: "Average response time for GET operations"
  },
  {
    name: "Scalability",
    value: 100,
    unit: "nodes",
    progress: 85,
    icon: Server,
    color: "cyber-blue",
    description: "Tested cluster configuration maximum"
  },
  {
    name: "Availability",
    value: 99.9,
    unit: "%",
    progress: 98,
    icon: TrendingUp,
    color: "cyber-purple",
    description: "Uptime with automatic failover enabled"
  }
];

const benchmarks = [
  { operation: "GET", latency: "0.3ms", throughput: "250K ops/sec" },
  { operation: "SET", latency: "0.5ms", throughput: "200K ops/sec" },
  { operation: "DEL", latency: "0.4ms", throughput: "180K ops/sec" },
  { operation: "EXISTS", latency: "0.2ms", throughput: "300K ops/sec" }
];

const Performance = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Performance Metrics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benchmarked performance results from production-ready test clusters
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={metric.name}
                className="p-6 bg-card/50 shadow-card border-border/50 transition-cyber hover:shadow-performance hover:border-cyber-blue/30 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-${metric.color}/10 mb-4 group-hover:shadow-cyber transition-cyber`}>
                    <Icon className={`w-6 h-6 text-${metric.color}`} />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {metric.name}
                  </h3>
                  <div className="mb-3">
                    <span className={`text-3xl font-bold text-${metric.color}`}>
                      {metric.value.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {metric.unit}
                    </span>
                  </div>
                  <Progress value={metric.progress} className="mb-2 h-2" />
                  <p className="text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Benchmark Results */}
        <Card className="p-8 bg-card/70 shadow-card border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              Operation Benchmarks
            </h3>
            <p className="text-muted-foreground">
              Performance results for core cache operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benchmarks.map((bench, index) => (
              <div 
                key={bench.operation}
                className="text-center p-4 bg-secondary/30 rounded-lg transition-cyber hover:bg-secondary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Badge variant="outline" className="mb-3 bg-primary/10 border-primary/30 text-primary">
                  {bench.operation}
                </Badge>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Latency</p>
                  <p className="font-mono font-bold text-cyber-green">{bench.latency}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Throughput</p>
                  <p className="font-mono font-bold text-cyber-blue">{bench.throughput}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Performance;
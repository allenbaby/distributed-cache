import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Network, Cpu, HardDrive } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Sharding",
    description: "Automatic data partitioning across multiple nodes for horizontal scaling",
    color: "cyber-blue",
    details: ["Consistent hashing", "Dynamic rebalancing", "Node discovery"]
  },
  {
    icon: Network,
    title: "Replication", 
    description: "Master-slave replication with automatic failover for high availability",
    color: "cyber-green",
    details: ["Async replication", "Leader election", "Split-brain resolution"]
  },
  {
    icon: Cpu,
    title: "LRU Eviction",
    description: "Efficient memory management with Least Recently Used cache eviction policy",
    color: "cyber-purple", 
    details: ["O(1) operations", "Memory thresholds", "Custom policies"]
  },
  {
    icon: HardDrive,
    title: "Concurrency",
    description: "Thread-safe operations using mutexes and condition variables",
    color: "cyber-amber",
    details: ["Read-write locks", "Lock-free structures", "Deadlock prevention"]
  }
];

const Architecture = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            System Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered for high performance, scalability, and reliability in distributed environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="p-8 bg-card/70 shadow-card border-border/50 transition-cyber hover:shadow-performance hover:border-cyber-blue/30 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${feature.color}/10 group-hover:shadow-cyber transition-cyber`}>
                    <Icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {feature.details.map((detail) => (
                        <Badge 
                          key={detail}
                          variant="outline" 
                          className="bg-secondary/30 border-border/50 text-xs"
                        >
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
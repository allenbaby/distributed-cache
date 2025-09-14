import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    name: "C++",
    description: "Core cache implementation with high-performance data structures",
    icon: "💻",
    color: "cyber-blue",
    features: ["STL containers", "Memory management", "Template metaprogramming"]
  },
  {
    name: "Python",
    description: "Client libraries and management tools",
    icon: "🐍", 
    color: "cyber-green",
    features: ["gRPC client", "Monitoring tools", "Configuration scripts"]
  },
  {
    name: "gRPC",
    description: "High-performance RPC framework for inter-node communication",
    icon: "🌐",
    color: "cyber-purple",
    features: ["Protocol Buffers", "Streaming", "Load balancing"]
  },
  {
    name: "Multithreading",
    description: "Concurrent operations with thread-safe data access",
    icon: "⚡",
    color: "cyber-amber",
    features: ["Mutexes & locks", "Condition variables", "Thread pools"]
  }
];

const TechStack = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technologies for maximum performance and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              className="p-6 bg-card/50 shadow-card border-border/50 transition-cyber hover:shadow-performance hover:border-cyber-blue/30 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-cyber">
                  {tech.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 text-${tech.color}`}>
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {tech.features.map((feature) => (
                    <Badge 
                      key={feature} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
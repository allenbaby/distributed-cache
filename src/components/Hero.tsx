import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Database, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-tech opacity-80" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-cyber" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-cyber" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Project badge */}
        <Badge variant="outline" className="mb-8 px-4 py-2 bg-card/50 border-cyber-blue/30 text-cyber-blue animate-glow">
          <Github className="w-4 h-4 mr-2" />
          Open Source Project
        </Badge>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
          Distributed Cache System
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          A Redis-like, high-performance in-memory key-value store with sharding, replication, and LRU eviction
        </p>

        {/* Key metrics */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Card className="p-4 bg-card/50 shadow-card border-border/50">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-cyber-amber" />
              <div>
                <p className="text-2xl font-bold text-cyber-amber">200K+</p>
                <p className="text-sm text-muted-foreground">ops/sec</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-card/50 shadow-card border-border/50">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-cyber-green" />
              <div>
                <p className="text-2xl font-bold text-cyber-green">Distributed</p>
                <p className="text-sm text-muted-foreground">Sharding</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-card/50 shadow-card border-border/50">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-cyber-blue" />
              <div>
                <p className="text-2xl font-bold text-cyber-blue">Multi-threaded</p>
                <p className="text-sm text-muted-foreground">Concurrent</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cyber" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
          <Button variant="outline" size="lg" className="border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 transition-cyber">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
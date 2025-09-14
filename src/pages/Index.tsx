import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Architecture from "@/components/Architecture";
import Performance from "@/components/Performance";
import CodeExamples from "@/components/CodeExamples";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TechStack />
      <Architecture />
      <Performance />
      <CodeExamples />
    </main>
  );
};

export default Index;

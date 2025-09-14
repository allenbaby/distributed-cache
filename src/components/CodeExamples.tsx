import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const codeExamples = {
  cpp: {
    title: "C++ Core Implementation",
    language: "C++",
    code: `// Distributed cache node implementation
class CacheNode {
private:
    std::unordered_map<std::string, std::string> data_;
    std::shared_mutex rw_mutex_;
    LRUEvictionPolicy eviction_policy_;
    
public:
    bool Get(const std::string& key, std::string& value) {
        std::shared_lock<std::shared_mutex> lock(rw_mutex_);
        auto it = data_.find(key);
        if (it != data_.end()) {
            value = it->second;
            eviction_policy_.Access(key);
            return true;
        }
        return false;
    }
    
    void Set(const std::string& key, const std::string& value) {
        std::unique_lock<std::shared_mutex> lock(rw_mutex_);
        if (data_.size() >= max_capacity_ && 
            data_.find(key) == data_.end()) {
            std::string evicted_key = eviction_policy_.Evict();
            data_.erase(evicted_key);
        }
        data_[key] = value;
        eviction_policy_.Access(key);
    }
};`
  },
  python: {
    title: "Python Client Library",
    language: "Python", 
    code: `# gRPC client for distributed cache
import grpc
import cache_pb2_grpc as cache_grpc
import cache_pb2

class DistributedCacheClient:
    def __init__(self, nodes):
        self.nodes = nodes
        self.channels = []
        self.stubs = []
        
        for node in nodes:
            channel = grpc.insecure_channel(f'{node.host}:{node.port}')
            stub = cache_grpc.CacheServiceStub(channel)
            self.channels.append(channel)
            self.stubs.append(stub)
    
    def get(self, key):
        node_id = self._hash_key(key) % len(self.stubs)
        request = cache_pb2.GetRequest(key=key)
        
        try:
            response = self.stubs[node_id].Get(request)
            return response.value if response.found else None
        except grpc.RpcError as e:
            # Fallback to replica nodes
            return self._get_with_fallback(key, node_id)
    
    def set(self, key, value):
        node_id = self._hash_key(key) % len(self.stubs)
        request = cache_pb2.SetRequest(key=key, value=value)
        return self.stubs[node_id].Set(request)`
  },
  grpc: {
    title: "gRPC Service Definition",
    language: "protobuf",
    code: `// cache.proto - gRPC service definition
syntax = "proto3";

package cache;

service CacheService {
  rpc Get(GetRequest) returns (GetResponse);
  rpc Set(SetRequest) returns (SetResponse);
  rpc Delete(DeleteRequest) returns (DeleteResponse);
  rpc Exists(ExistsRequest) returns (ExistsResponse);
  
  // Streaming for bulk operations
  rpc BulkSet(stream SetRequest) returns (BulkResponse);
  rpc Subscribe(SubscribeRequest) returns (stream CacheEvent);
}

message GetRequest {
  string key = 1;
}

message GetResponse {
  bool found = 1;
  string value = 2;
  int64 timestamp = 3;
}

message SetRequest {
  string key = 1;
  string value = 2;
  int32 ttl_seconds = 3;
}

message CacheEvent {
  enum EventType {
    SET = 0;
    DELETE = 1;
    EXPIRE = 2;
  }
  
  EventType type = 1;
  string key = 2;
  string value = 3;
  int64 timestamp = 4;
}`
  }
};

const CodeExamples = () => {
  return (
    <section className="py-20 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Implementation Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core implementations showcasing the distributed cache system architecture
          </p>
        </div>

        <Card className="p-8 bg-card/70 shadow-card border-border/50">
          <Tabs defaultValue="cpp" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
              <TabsTrigger value="cpp" className="data-[state=active]:bg-cyber-blue/20">
                C++ Core
              </TabsTrigger>
              <TabsTrigger value="python" className="data-[state=active]:bg-cyber-green/20">
                Python Client
              </TabsTrigger>
              <TabsTrigger value="grpc" className="data-[state=active]:bg-cyber-purple/20">
                gRPC Proto
              </TabsTrigger>
            </TabsList>

            {Object.entries(codeExamples).map(([key, example]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">
                      {example.title}
                    </h3>
                    <Badge variant="outline" className="bg-primary/10 border-primary/30">
                      {example.language}
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <pre className="bg-secondary/30 border border-border/50 rounded-lg p-6 overflow-x-auto">
                      <code className="text-sm font-mono text-muted-foreground leading-relaxed whitespace-pre">
                        {example.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default CodeExamples;
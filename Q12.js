//Implement Graph traversal

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        return this.items.push(element);
    }
    isEmpty() {
        return this.items.length == 0;
    }
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }
}

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices; this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
    printGraph() {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";
            for (var j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }
    dfs(startingNode) {
        var visited = {};
        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);
        var get_neighbours = this.AdjList.get(vert);
        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }

    bfs(startingNode) {
        var visited = {}; 
        var q = new Queue(); 
        visited[startingNode] = true;
        q.enqueue(startingNode); 
        while (!q.isEmpty()) {
            var getQueueElement = q.dequeue();
            console.log(getQueueElement);
            var get_List = this.AdjList.get(getQueueElement);
            for (var i in get_List) {
                var neigh = get_List[i];
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
}
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.printGraph();
console.log("DFS");
g.dfs('A');
console.log("BFS");
g.bfs('A'); 
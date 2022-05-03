//Implement Prim’s algorithm using greedy technique

class MST {
    // Number of vertices in the graph
    // A utility function to find the vertex with minimum key
    // value, from the set of vertices not yet included in MST
    minKey(key, mstSet, MAX_VALUE) {
        // Initialize min value
        let min = MAX_VALUE, min_index = -1;
        for (let v = 0; v < V; v++)
            if (mstSet[v] == false && key[v] < min) {
                min = key[v];
                min_index = v;
            }
        return min_index;
    }
    // A utility function to print the constructed MST stored in
    // parent[]
    printMST(parent, graph) {
        console.log("Edge Weight");
        for (let i = 1; i < V; i++)
            console.log(parent[i] + " - " + i + " :" + graph[i][parent[i]]);
    }
    // Function to construct and print MST for a graph represented
    // using adjacency matrix representation
    primMST(graph, V) {
        // Array to store constructed MST
        let parent = new Array(V);
        // Key values used to pick minimum weight edge in cut
        let key = new Array(V);
        // To represent set of vertices included in MST
        let mstSet = new Array(V);
        // Initialize all keys as INFINITE
        for (let i = 0; i < V; i++) {
            key[i] = MAX_VALUE;
            mstSet[i] = false;
        }
        // Always include first 1st vertex in MST.
        key[0] = 0; // Make key 0 so that this vertex is
        // picked as first vertex
        parent[0] = -1; // First node is always root of MST
        // The MST will have V vertices
        for (let count = 0; count < V - 1; count++) {
            // Pick thd minimum key vertex from the set of vertices
            // not yet included in MST
            let u = this.minKey(key, mstSet, MAX_VALUE);

            // Add the picked vertex to the MST Set
            mstSet[u] = true;

            // Update key value and parent index of the adjacent
            // vertices of the picked vertex. Consider only those
            // vertices which are not yet included in MST
            for (let z = 0; z < V; z++)
                // let ans=graph[u][v];
                // console.log(ans.charCodeAt());
                // graph[u][v] is non zero only for adjacent vertices of m
                // mstSet[v] is false for vertices not yet included in MST
                // Update the key only if graph[u][v] is smaller than key[v]
                if (graph[u][z] != 0 && mstSet[z] == false && graph[u][z] < key[z]) {
                    parent[z] = u;
                    key[z] = graph[u][z];
                }
        }

        // print the constructed MST
        this.printMST(parent, graph);
    }
}
let t = new MST();
let graph = [
    [0, 2, 5, 3],
    [2, 0, 2, 0],
    [5, 2, 0, 3],
    [3, 0, 3, 0]
];
let V = 4, MAX_VALUE = 99
// Print the solution
console.log("Following are the edges in the constructed MST:");
t.primMST(graph, V, MAX_VALUE);
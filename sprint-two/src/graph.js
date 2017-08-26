

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  for (var i = 0; i < this.nodes[node].length; i++) {
    this.removeEdge(node, this.nodes[node][i]);
  }  

  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (Number(fromNode) === Number(toNode)) {
    this.nodes[fromNode].push(Number(toNode));
  } else {
    this.nodes[fromNode].push(Number(toNode));
    this.nodes[toNode].push(Number(fromNode));
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // find indices of edge to remove
  var fromNodeIndex = this.nodes[fromNode].indexOf(toNode);
  var toNodeIndex = this.nodes[toNode].indexOf(fromNode);
  
  // slice and concatenate
  this.nodes[fromNode] = this.nodes[fromNode].slice(0, fromNodeIndex).concat(this.nodes[fromNode].slice(fromNodeIndex + 1));
  this.nodes[toNode] = this.nodes[toNode].slice(0, toNodeIndex).concat(this.nodes[toNode].slice(toNodeIndex + 1));

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var keys = Object.keys(this.nodes);
  for (var i = 0; i < keys.length; i++) {
    cb(keys[i]);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(n)
 * hasEdge: O(n)
 * addEdge: O(1)
 * removeEdge: O(1)
 * forEachNode: O(n)
 */



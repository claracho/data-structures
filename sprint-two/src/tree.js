var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = arguments[1] || false;
  if (this.value === target) {
    result = true;
  }
  if (this.children.length > 0) {
    this.children.forEach(function (child) {
      result = child.contains(target, result);
    });
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Search: O(n^2)
 * Retrieval: O(n^2)
 * Insertion: O(1)
 * Worst Case: O(n^2)
 */

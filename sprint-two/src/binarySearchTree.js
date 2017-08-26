var BinarySearchTree = function(value) {
  var BST = BSTNode(value);

   
  BST.insert = function(value) {
    var currentNode = arguments[1] || BST;
    // if value is less than currentNode.value
    if (value < currentNode.value) {
      // if currentNode.left exists, then recurse currentNode.insert()
      if (currentNode.left) {
        BST.insert(value, currentNode.left);
      } else { // else, currentNode.left = BSTNode(value);
        currentNode.left = BSTNode(value);
      }
    } else if (value > currentNode.value) { // if value is greater than currentNode.value
      // if currentNode.right exists, then recurse currentNode.insert()
      if (currentNode.right) {
        BST.insert(value, currentNode.right);
      } else { // else, currentNode.right = BSTNode(value);
        currentNode.right = BSTNode(value);
      }
    }
  };

  BST.contains = function(value) {
    var currentNode = arguments[1] || BST;
    if (value === currentNode.value) {
      return true;
    } else if (value < currentNode.value) {
      if (currentNode.left === null) {
        return false;
      }
      return BST.contains(value, currentNode.left);
    } else if (value > currentNode.value) {
      if (currentNode.right === null) {
        return false;
      }
      return BST.contains(value, currentNode.right);
    }
  };

  BST.depthFirstLog = function(cb) {
    var currentNode = arguments[1] || BST;
    temp = cb;
    
    temp(currentNode.value);  
  
    if (currentNode.left) {
      BST.depthFirstLog(temp, currentNode.left);
    }
    if (currentNode.right) {
      BST.depthFirstLog(temp, currentNode.right);
    }
  };

  return BST;
};

var BSTNode = function(value) {
  var BSTNode = {};
  
  BSTNode.value = value;
  BSTNode.right = null;
  BSTNode.left = null;

  return BSTNode;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 * 
 */
 
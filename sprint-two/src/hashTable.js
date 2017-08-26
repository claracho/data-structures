

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    // if hash bucket is empty, create linked list with one node
    this._storage.set(index, HashLinkedList()); 
    this._storage.get(index).addToTail(); 
    this._storage.get(index).addToTail(k, v);
  } else if (this._storage.get(index).find(k) === undefined) {
    this._storage.get(index).addToTail(k, v); // create new node to store value    
  } else {
    this._storage.get(index).update(k, v);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = this._storage.get(index).find(k);
  return node ? node.value : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).removeNode(this._storage.get(index).find(k));
};

var HashLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(key, value) {
    var newNode = HashNode(key, value);
    if (list.head === null) {   
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.find = function(key) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  };

  list.removeNode = function(node) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.next === node) {
        currentNode.next = node.next;
        return;
      }
      currentNode = currentNode.next;
    }
  };

  list.update = function(key, value) {
    var currentNode = list.head;
    while (currentNode !== null) {

      if (currentNode.key === key) {
        currentNode.value = value;
      }
      currentNode = currentNode.next;
    }
  };

  return list;
};

var HashNode = function(key, value) {
  var node = {};

  node.key = key;
  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1)
 * retrieve: O(n)
 * remove: O(n)
 * 
 * 
 */



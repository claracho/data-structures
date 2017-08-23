var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var results = storage[1];
    for (var key = 1; key <= count; key++) {
      if (key !== count) {
        storage[key] = storage[key + 1];
      } else { 
        delete storage[key];
      }
    }
    if (count > 0) {
      count--;
    }
    return results;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

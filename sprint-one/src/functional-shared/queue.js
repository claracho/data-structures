var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  dequeue: function() {
    var results = this.storage[1];
    for (var key = 1; key <= this.count; key++) {
      if (key !== this.count) {
        this.storage[key] = this.storage[key + 1];
      } else { 
        delete this.storage[key];
      }
    }
    if (this.count > 0) {
      this.count--;
    }
    return results;
  },
  size: function() {
    return this.count;
  }
};



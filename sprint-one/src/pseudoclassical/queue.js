var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function () {
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
};

Queue.prototype.size = function() {
  return this.count;
};
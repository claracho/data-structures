var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () {
  var result = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count > 0) {
    this.count--;
  }
  return result;
};

stackMethods.size = function () {
  return this.count;
};
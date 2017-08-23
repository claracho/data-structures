var Stack = function() {

  this.storage = {};
  this.count = 0;
  
};



Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function () {
  var result = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count > 0) {
    this.count--;
  }
  return result;
};

Stack.prototype.size = function () {
  return this.count;
};

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello World from the Greetr Module!!!';
}

util.inherits(Greetr, EventEmitter);

// Finally addressed passing data.
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
  console.log("Someone greeted!: " + data);
});

greeter1.greet("Yay my curiosity is put to rest.");

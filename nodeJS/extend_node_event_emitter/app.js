var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = 'Hello World from the Greetr Module!!!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
}

var greeter1 = new Greetr();

greeter1.on('greet', function(){
  console.log("Someone emitted dag yo");
});

greeter1.greet();

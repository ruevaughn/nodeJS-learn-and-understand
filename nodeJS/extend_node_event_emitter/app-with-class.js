'use strict';

var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted!!!: ' + data);
})

greeter1.on('greet', function(data){
  console.log("Someone greeted!: " + data);
});

greeter1.greet("JavaScript Classes are Syntactic sugar and i'm a little bored might just go work on rails for a bit also I hate semicolons but love run-on sentences.");

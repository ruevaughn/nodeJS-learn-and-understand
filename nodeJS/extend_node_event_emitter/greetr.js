'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello World from the Greetr Module... with class';
  }

  greet(data){
    console.log(`${ this.greeting }: ${ data }` );
    this.emit('greet', data)
  }
}

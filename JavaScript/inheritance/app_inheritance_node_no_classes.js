var util = require('util');

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe;'
}

// prototype is the prototype of the prototype of officer. Word.
Person.prototype.greet = function(greeting='') {
  console.log("Hello" + ' ' + this.firstname + ' ' + this.lastname + ' ' + 'I am human too.' );
}

function Policeman() {
  Person.call(this);
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();

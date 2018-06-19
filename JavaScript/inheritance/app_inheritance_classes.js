'use strict'

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hello" + ' ' + this.firstname + ' ' + this.lastname);
  }
}

var chuck = new Person('Chuck', 'Norris');
chuck.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(chuck.__proto__);
console.log(jane.__proto__);
console.log(chuck.__proto__ === jane.__proto__);

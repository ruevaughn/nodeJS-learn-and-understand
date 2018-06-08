function greet() {
  console.log('hi');
}

greet()

// function are first-class
function logGreeting(fn) {
  fn();
}

logGreeting(greet);

var greetMe = function() {
  console.log('Ay Tony!');
}
greetMe()

logGreeting(greetMe);

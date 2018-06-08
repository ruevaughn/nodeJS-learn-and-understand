function greet() {
  return 'hi world';
}

greet()

function depart() {
  return "goodbye world.";
}

depart();

// function are first-class
function logGreeting(fn) {
  console.log(fn());
}

logGreeting(greet);
logGreeting(depart);

var greetMe = function() {
  return 'Ay Tony!';
}
greetMe()

logGreeting(greetMe);


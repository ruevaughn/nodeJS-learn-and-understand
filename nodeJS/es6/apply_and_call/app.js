// //
// Call and Apply are very powerful options for essentially borrowing methods
// and giving them the objects we want them to work o
//
// The only difference between .call() and .apply() is how parameters are passed if we
// have parameters that are needed.
//
// For the greet function with call you add a comma and pass the parameter
// and/or any other parameters you need.
//
// obj.greet.call({name: 'Jane Doe', param1, param2})
//
// But for .apply() you simply pass an array of parameters
//
// obj.greet.apply({name: 'chuck norris'}, [param1, params2])
//
// Essentially .call() and .apply() let you change what this points to.
// //


var obj = {
  name: 'John Doe',
  greet: function() {
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe'});
obj.greet.apply({ name: 'Chuck Norris'});

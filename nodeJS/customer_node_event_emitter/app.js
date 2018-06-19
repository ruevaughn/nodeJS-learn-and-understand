// Use actual Node Emitter now - works exactly the same though much much much more extensive.
var Emitter = require('events');

var emtr = new Emitter();

// This will run whenever the 'greet' event is emitted.
emtr.on('greet', function(){
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
  console.log('A greeting occurred!');
});

emtr.on('fsChange', function(){
  // pretend name was passed in
  name = 'index.js'
  console.log(name + ' ' + 'was changed! Please re-render the browser accordingly.')
})

console.log('Hello!');
emtr.emit('greet');

console.log('I Changed a file!');
emtr.emit('fsChange');

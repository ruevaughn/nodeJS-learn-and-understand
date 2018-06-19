var Emitter = require('./emitter');

var emtr = new Emitter();

// This will run whenever the 'greet' event is emitted.
emtr.on('greet', function(){
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
  console.log('A greeting occurred!');
});

// console.log is the event we are saying is the event, call the emit event when emitted.
console.log('Hello!');
emtr.emit('greet');

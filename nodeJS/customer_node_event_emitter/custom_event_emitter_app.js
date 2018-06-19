var Emitter = require('./emitter');

var emtr = new Emitter();

// This will run whenever the 'greet' event is emitted.
emtr.on('greet', function(){
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
  console.log('A greeting occurred!');
});

// If would imagine an object could/should be used so I can pass paramaters to my emit function?
// Yup, after looking at the Node actual event emitter, events is an object so properties
// can indeed be passed in. I guess that makes sense as I can't see any other way this
// could be viable if not.
emtr.on('fsChange', function(){
  // pretend name was passed in
  // Nodemon!
  name = 'index.js'
  console.log(name + ' ' + 'was changed! Please re-render the browser accordingly.')
})

// console.log is the event we are saying is the event, call the emit event when emitted.
console.log('Hello!');
emtr.emit('greet');

console.log('I Changed a file!');
emtr.emit('fsChange');

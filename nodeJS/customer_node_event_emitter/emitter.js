// Build own custom Event Emitter that Node uses to listen to custom events
// to properly understand it.
// Two Types of events:
// 1) System Events - Provided by the V8 Engine C++ Core libuv.
// 2) Custom Events - Provided by the Javascript core and handled by the Event Emitter
//    which this Emitter is a slightly simpler version.
// In a nutshell, this Emitter essentially allow us to say an event has happened and
// to it. This could be built in many ways including ES6, this version will simply
// use the standard first class function.

function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listener) {

}

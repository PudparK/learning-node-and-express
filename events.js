const EventEmitter = require('events');

class Job extends EventEmitter {}
var job = new Job();

job.on('done', function(timeDone) {
    console.log('Job was pronounced done at ', timeDone);
});

job.emit('done', new Date());

job.removeAllListeners();


class Emitter extends EventEmitter {}
var emitter = new Emitter()

emitter.on('knock', function() {
  console.log('Who\'s there?')
})

emitter.on('knock', function() {
  console.log('Go away!')
})

emitter.emit('knock')
emitter.emit('knock')
emitter.emit('knock')
emitter.emit('knock')
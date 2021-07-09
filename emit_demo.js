
const EventEmitter = require('events');
const uppercase_emitter = new EventEmitter();
const lowercase_emitter = new EventEmitter();

uppercase_emitter.on('trying_to_divide_by_zero', (_) => { 
    // event-handler. what to do when event was triggered?
    // do whatever you want
    console.error(`CANNOT DIVIDE ${_} BY ZERO!`);
})

lowercase_emitter.on('trying_to_divide_by_zero', (_) => { 
    // event-handler. what to do when event was triggered?
    // do whatever you want
    console.error(`cannot divide ${_} be zero!`);
})

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let x,y = 0;  
readline.question('enter 1st number ?', _x => {
    x = _x;
    readline.question('enter 2nd number ?', _y => {
        y = _y;
        if (y == 0) {
            // do something
            //uppercase_emitter.emit('trying_to_divide_by_zero')
            lowercase_emitter.emit('trying_to_divide_by_zero', x)
        } 
        else 
        {
            const result = x / y;
            console.log(`${x} / ${y} = ${result}`)
        }
        readline.close();
     });
 });


// input 2 numbers from user
// display sum of numbers 
// create event emitter for large numbers (let's assume above 100)
// event listener for result above 100, 
//    will print: 'LARGE NUMBER OCCURED' and print the number
// another event listener for result above 100, 
//    will print: 'RESULT PRINTER UPDATE' and print the number
// choose both emitters 
// **ETGAR: place the emitter code in a different file and use export


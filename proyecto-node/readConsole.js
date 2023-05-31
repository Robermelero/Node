const read = require('readline');

function readConsole(callback){
    let rl = read.createInterface(process.stdin, process.stdout);
    rl.question('What is your name?: ', (name) => {
        rl.question('What is your surname?: ', (surname) => {
          rl.question('How old are you?: ', (age) => {
            let person = {
              name: name,
              surname: surname,
              age: parseInt(age)
            };
            
           
              rl.close();
              callback(person)
            });
          });
        });
     };



module.exports = {readConsole};

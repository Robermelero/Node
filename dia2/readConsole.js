const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs/promises');
const readline = require('readline')

function pregunta(pregunta) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    return new Promise((resolve, reject) => {
      rl.question(pregunta, (respuesta) => {
        resolve(respuesta);
        rl.close();
      });
    });
  }

function preguntas(callback) {
      pregunta('What is your name?: ')
        .then((name) => {
          return pregunta('What is your surname?: ')
            .then((surname) => {
              return pregunta('How old are you?: ')
                .then((age) => {
                  const person = {
                    name: name,
                    surname: surname,
                    age: parseInt(age)};
                    return callback(person)
                  })})})
                    .catch((error) => {
                              console.error('Error:', error);
                            })
                        };
                  




async function preguntas1(callback){
    try {
  let name = await pregunta ('What is your name?: ');
  let surname = await pregunta('What is your surname?: ');
  let age = await pregunta ('How old are you?: ')
  
  let persona = {
    name:name,
    surname:surname,
    age: parseInt(age)
  }
  return callback(persona)
}
    catch (error){ 
        console.log(error)
    }
}

module.exports = {preguntas,preguntas1,pregunta}

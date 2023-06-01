const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs/promises');
const readline = require('readline')

// let objeto = {
//   name: 'Roberto',
//   surname: 'Melero',
//   age: 38
// };

// let objetoJSON = JSON.stringify(objeto);

// fs.writeFile('objeto.json', objetoJSON)
// .then(() =>{
// return fs.readFile('objeto.jason', 'utf8')
// })
// .then( data => { 
//     console.log(JSON.parse(data));
// })
// .catch(err => {
//     console.log(err);
// })

// async function write_read(){
// try{
//     await fs.writeFile('objeto.json', objetoJSON)
//     const nuevo = await fs.readFile ('objeto.json', 'utf8')
//     console.log(JSON.parse(nuevo));
// } catch (error){
//     console.log(error)
// }
// }
// write_read()



// function pregunta(pregunta) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   return new Promise((resolve, reject) => {
//     rl.question(pregunta, (respuesta) => {
//       resolve(respuesta);
//       rl.close();
//     });
//   });
// }

// function preguntas() {
//   pregunta('What is your name?: ')
//     .then((name) => {
//       return pregunta('What is your surname?: ')
//         .then((surname) => {
//           return pregunta('How old are you?: ')
//             .then((age) => {
//               const person = {
//                 name: name,
//                 surname: surname,
//                 age: parseInt(age)
//               };
//               const objetoJSON = JSON.stringify(person);

//               return fs.writeFile('objeto.json', objetoJSON);
//             });
//         });
//     })
//     .then(() => {
//       return fs.readFile('objeto.json', 'utf8');
//     })
//     .then((data) => {
//       const objeto2 = JSON.parse(data);
//       console.log(objeto2);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }
// preguntas();


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

async function preguntas1(){
  try {
let name = await pregunta ('What is your name?: ');
let surname = await pregunta('What is your surname?: ');
let age = await pregunta ('How old are you?: ')

let persona = {
  name:name,
  surname:surname,
  age: parseInt(age)
}
const objeto1JSON = JSON.stringify(persona);
await fs.writeFile('objeto.json', objeto1JSON)
    const nuevo1 = await fs.readFile ('objeto.json', 'utf8')
    console.log(JSON.parse(nuevo1));
} catch (error1){
    console.log(error1)
}
}
  preguntas1()
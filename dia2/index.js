const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs/promises');
const readline = require('readline')

let rc = require('./readConsole')
let wr = require('./writeAndReadObject')

// rc.preguntas((per) => {
//     wr.leerEsc('objeto.json',per)
// })

rc.preguntas1((por) => {
    wr.write_read('objetos1.json', por)
})
const fs = require('fs');
const read = require('readline');
let rc = require('./readConsole');
let wr = require('./writeAndReadObject');
const { Console } = require('console');


rc.readConsole((person)=> {
    wr.writeAndRead('objeto.json', person);
})

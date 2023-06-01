const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs/promises');
const readline = require('readline')

function leerEsc(x,y){
let objetoJSON = JSON.stringify(y);

fs.writeFile(x, objetoJSON)
.then(() =>{
return fs.readFile(x, 'utf8')
})
.then( data => { 
    console.log(JSON.parse(data));
})
.catch(err => {
    console.log(err);
})
}


async function write_read(b,c){
    try{
        let objetoJSON = JSON.stringify(c);
    await fs.writeFile(b, objetoJSON)
    const nuevo = await fs.readFile (b, 'utf8')
    console.log(JSON.parse(nuevo));
} catch (error){
    console.log(error)
}
}


module.exports = {write_read, leerEsc}
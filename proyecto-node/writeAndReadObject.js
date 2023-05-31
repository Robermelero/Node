
 
const fs = require('fs');
const read = require('readline');

function writeAndRead(x,y){
    let objetoJSON = JSON.stringify(y);

    fs.writeFile(x, objetoJSON, () => {
      fs.readFile(x, 'utf8', (err ,data) => {
        let objetoLeido = JSON.parse(data);
        console.log(objetoLeido);
      });
    });
}


  module.exports = {writeAndRead};



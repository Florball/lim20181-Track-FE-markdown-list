#!/usr/bin/env node

// captura los argumentos dados en línea de comando
// const [,, ...args] = process.argv
// console.log(`hola mundo ${args}`)

let fs = require('fs');

// Crea un nuevo archivo
// fs.writeFile("hola.txt", "Hola Mundo!", (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("El archivo fue creado correctamente");
// });

const [,, ...args] = process.argv 

fs.readFile(`${args}`, 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});
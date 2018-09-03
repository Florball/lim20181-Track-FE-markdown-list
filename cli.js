#!/usr/bin/env node

// captura los argumentos dados en línea de comando


const fs = require('fs');
const [, , ...args] = process.argv
const path = require('path');
const linkAbsolute = path.resolve(`${args[0]}`)
const markdownLinkExtractor = require('markdown-link-extractor');


const markdown = () => {
  fs.readFile(linkAbsolute, 'utf-8', (err, data) => {
    if (err) throw err;
    const links = markdownLinkExtractor(data);
    links.forEach((link) => {
      console.log(link);
    });
  });
};
markdown();

// Crea un nuevo archivo
// fs.writeFile("hola.txt", "Hola Mundo!", (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("El archivo fue creado correctamente");
// });

// if (link.length === 0) {
//   console.log('ingresa md-links y una ruta valida');
// }

// args.forEach( () => {
//   console.log(args[0])
// });

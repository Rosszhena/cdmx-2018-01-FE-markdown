const fs = require('fs'); 
const path = require('path');// nombre de la variable igual que el nombre del modulo 
const marked = require('marked');
const fetch = require('node-fetch');

// Funcion que valida la ruta si es relativa o absoluta
const validateRoute = (route) =>{
    let fileAbsolut = path.resolve(route);
    return fileAbsolut; 
};

// Funcion leer archivo md
const readFile = (fileName) => {
  fs.readFile(fileName, function(err, md) {
    if (err) {
      console.log(err);
    }
    const arregloLinks = [];
    marked(md.toString(), {// Se covierte el archivo md a htm
      renderer: getLink(arregloLinks) // Se invoca la función que obtiene los links del archivo md   
    }); 
    validateUrl(arregloLinks);
  });
};


getLink = function(arregloLinks) {
  let obj = {};
  let render = new marked.Renderer();

  render.link = function(href, title, text) {
    obj = {
      links: href, 
      text: text
    };
    arregloLinks.push(obj);
    return obj;
  }; 
  return render; 
};

const validateUrl = (array) => {
  let mypromesas = [];
  array.forEach(function(element, index) {
    mypromesas.push(new Promise((resolve, reject) => {
      fetch(element.links).then(res => {
        element.status = res.status;
        element.statusText = res.statusText;
        resolve(element);
      }).catch(err => {
        element.status = err.code;
        resolve(element);
      });
    }));
  });

  Promise.all(mypromesas).then(values => { 
    //console.log(values);
  }).catch(reason => { 
    console.log(reason);
  });
};

readFile('./README.md');
module.exports = {
  validateRoute,
  readFile 
};
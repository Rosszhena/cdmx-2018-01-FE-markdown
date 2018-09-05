const fs = require('fs'); 
const path = require('path');// nombre de la variable igual que el nombre del modulo 
const marked = require('marked');

// Funcion que valida la ruta si es relativa o absoluta
const validateLink = (route) =>{
  if (path.isAbsolute(route) != true) {
    let fileAbsolut = path.resolve(route);
    return fileAbsolut;
  } else return route; 
};

// Funcion leer archivo md
const readFile = (callback) => {
  fs.readFile(callback, function(err, md) {
    if (err) {
      console.log(err);
    }
        
    // console.log(marked(md.toString()))
    // console.log(md.toString())
    marked(md.toString(), {// Se covierte el archivo md a html
        
      renderer: getLink() // Se invoca la función que obtiene los links del archivo md
    }); 
  });
};

// return a custom renderer for marked.
getLink = function() {
  let arrLink = [];
  var render = new marked.Renderer();
  render.link = function(href, title, text) {
    let obj = {links: href, text: text};
    arrLink.push(obj)
    console.log(arrLink);
    return text + ' ( link to: ' + href + ' )';
  };
  return render; 
};

readFile('./src/ux/README.md');


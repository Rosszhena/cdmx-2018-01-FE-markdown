const fs = require('fs'); 
const path = require('path');// nombre de la variable igual que el nombre del modulo 
const marked = require('marked');

const mdLink = (file) => {
    let fileAbsolut = path.resolve(file);
    
    fs.readFile(file, function(err, md) {
        if (err) {
        console.log(err);
        }
        let link;
        marked(md.toString(), {renderer: render_unlink(link)});
        console.log(link)
    });
   
    };

mdLink('./src/ux/README.md');

// return a custom renderer for marked.
render_unlink = function() {
  var render = new marked.Renderer();
  render.link = function(href, title, text) {
   return href
    
  };
 
 // console.log(href, text)
  return render; 
};

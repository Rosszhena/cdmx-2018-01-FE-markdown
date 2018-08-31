const fs = require("fs"); 
const path = require("path");// nombre de la variable igual que el nombre del modulo 
const marked = require('marked');

const mdLink = (file) => {
     if(path.isAbsolute(file)!=true){
        //console.log("Es falso")
        let fileAbsolut = path.resolve(file)
        console.log("prueba "+fileAbsolut)
     }

   fs.readFile(file,function(err,md){
       if(err){
            console.log(err);
        }
        marked(md.toString(), {renderer: render_unlink()})
        })
    }

    mdLink("./src/ux/README.md")

// return a custom renderer for marked.
render_unlink = function () {
 
    var render = new marked.Renderer();
 
    render.link = function (href, title, text) {
 
        console.log("href: " + href +  " text " +text)
        return text + ' ( link to: ' + href + ' )';
    };
 
    return render; 
};



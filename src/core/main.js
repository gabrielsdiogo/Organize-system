const xmlToJSON = require("./src/modules/xmlParse");
const resultJson = require("./src/modules/generateJson");

// import * as xmlToJSON from '../modules/xmlParse';
// import * as resultJson from '../modules/generateJson'
let destino;

async function run(path) {
  try {
    let dados = [];
    for (let index = 0; index < path.length; index++) {
      const value = await xmlToJSON(path[index]);
      dados.push(value);
    }
    resultJson(dados);
  } catch (err) {
    console.log(err);
  }
}

function processar() {
  let paths = [];
  let arquivo = document.getElementById('inputGroupFile01').files;
  if (arquivo.length == 0) {
    alert('Você deve selecionar pelo menos um arquivo.');
  }else{
    for (let index = 0; index < arquivo.length; index++) {
      paths.push(arquivo[index].path.replaceAll("\\", '/'));
    }
    
    run(paths);
    alert("Arquivo gerado!");
  }
  

}

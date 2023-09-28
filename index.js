const xmlToJSON = require("./src/modules/xmlParse");
const resultJson = require("./src/modules/generateJson");


var caminhos = ["./xmls/2.9974196120374805E8.xml", "./xmls/4.002015354049304E7.xml", "./xmls/5.735043132634182E8.xml", "./xmls/6.9374913991875E8.xml"];

async function run() {
  try {
    
    let dados = [];
    for (let index = 0; index < caminhos.length; index++) {
        const value = await xmlToJSON(caminhos[index]);
        dados.push(value);
    }

    resultJson(dados);

  } catch (err) {
    console.log(err);
  }
}

run();
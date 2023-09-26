const xmlToJSON = require('./src/modules/xmlParse');
const resultJson = require('./src/modules/generateJson');
const excel = require('./src/modules/generateExcel');
const util = require('util');

xmlToJSON('xmlteste.xml');



// const result = xmlToJSON('xmlteste.xml');

// result.then(result =>{
//     resultJson(result);
// })
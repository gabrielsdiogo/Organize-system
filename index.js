const xmlToJSON = require('./src/modules/xmlParse');
const resultJson = require('./src/modules/generateJson')
const util = require('util');

const result = xmlToJSON('xmlteste.xml');

result.then(result =>{
    resultJson(result);
})
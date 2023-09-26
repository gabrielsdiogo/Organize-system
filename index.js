const xmlToJSON = require('./src/modules/xmlParse');
const util = require('util');

const result = xmlToJSON('xmlteste.xml');

result.then(result =>{
    console.log('oi')
})
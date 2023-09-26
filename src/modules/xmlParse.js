const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const util = require('util');

const xmlParsed = async function(value){
    let xml = fs.readFileSync(value, "utf8");
    let parsed = await parser.parseStringPromise(xml).then((result)=>{
        console.log(result['ns2:NFSE']['ns2:Nfse'][0]['ns3:Competencia'][0]);
        return result;
    });
    
    return parsed;
};

module.exports = xmlParsed;
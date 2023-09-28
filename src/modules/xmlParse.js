const fs = require('fs');
const xml2js = require('xml2js');
const resultJson = require('./generateJson');
const parser = new xml2js.Parser();

const xmlParsed = async function(value){
    let xml = fs.readFileSync(value, "utf8");
    let parsed = await parser.parseStringPromise(xml).then((result)=>{
        return result;
    });
    
    return parsed;
};

module.exports = xmlParsed;
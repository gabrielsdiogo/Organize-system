const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const util = require('util');

const xmlParsed = async function(value){
    let xml = fs.readFileSync(value, "utf8");
    let parsed = await parser.parseStringPromise(xml).then((result)=>{
        // fs.writeFile ("payload.json", JSON.stringify(result), "utf8", function(err) {
        //     if (err) throw err;
        //     console.log('complete');
        //     }
        // );
        
        //console.log(util.inspect(result, false, null, true));
        return result;
    });
    
    return parsed;
};

module.exports = xmlParsed;
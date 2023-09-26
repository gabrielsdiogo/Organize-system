const fs = require('fs');


const resultJson = (xml) =>{
    let NF = [];

    xml['ns2:NFSE']['ns2:Nfse'].forEach(element => {
        

        // let somaRetencao = ( 
        //     parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorPis'][0]) + 
        //     parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCofins'][0]) + 
        //     parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIr'][0]) + 
        //     parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorInss'][0]) + 
        //     parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCsll'][0]) + 
        //     parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIssRetido'][0])
        // );
        
        // let formated = {
        //     teste: element['ns3:IdentificacaoNfse'][0]['ns3:Numero'][0],
        //     clientes: element['ns3:TomadorServico'][0]['ns3:RazaoSocial'][0],
        //     data: element['ns3:Competencia'][0],
        //     nfse: element['ns3:IdentificacaoNfse'][0]['ns3:Numero'][0],
        //     valor: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorServicos'][0].replace('.',','),
        //     pis: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorPis'][0].replace('.',','),
        //     cofins: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCofins'][0].replace('.',','),
        //     ir: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIr'][0].replace('.',','),
        //     inss: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorInss'][0].replace('.',','),
        //     csll: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCsll'][0].replace('.',','),
        //     issRetido: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIssRetido'][0].replace('.',','),
        //     totalRetencao: somaRetencao.toString().replace('.',','),
        //     valorLiquido: element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorLiquidoNfse'][0].replace('.',',')
        // };

        NF.push(element);
        
    });
    
    fs.writeFile ("NF.json", JSON.stringify(NF), "utf8", function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
    
    

    //console.log(nf);
}

module.exports = resultJson;
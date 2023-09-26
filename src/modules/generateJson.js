const fs = require('fs');
const excel = require('./generateExcel');

const resultJson = (xml) =>{
    let NF = [];

    xml['ns2:NFSE']['ns2:Nfse'].forEach(element => {
        try {
            
            let somaRetencao = ( 
                parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorPis') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorPis'][0] : "0") + 
                parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorCofins') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCofins'][0] : "0") + 
                parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorIr') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIr'][0] : "0",) + 
                parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorInss') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorInss'][0] : "0") + 
                parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorCsll') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCsll'][0] : "0") + 
                parseFloat(element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorIssRetido') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIssRetido'][0] : "0")
            );
            
            let formated = {
                clientes: element['ns3:TomadorServico'][0]['ns3:RazaoSocial'][0],
                data: element['ns3:Competencia'][0],
                nfse: element['ns3:IdentificacaoNfse'][0]['ns3:Numero'][0],
                valor: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorServicos') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorServicos'][0].replace('.',',') : "0",
                pis: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorPis') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorPis'][0].replace('.',',') : "0",
                cofins: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorCofins') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCofins'][0].replace('.',',') : "0",
                ir: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorIr') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIr'][0].replace('.',',') : "0",
                inss: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorInss') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorInss'][0].replace('.',',') : "0",
                csll: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorCsll') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorCsll'][0].replace('.',',') : "0",
                issRetido: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorIssRetido') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorIssRetido'][0].replace('.',',') : "0",
                totalRetencao: somaRetencao.toString().replace('.',','),
                valorLiquido: element['ns3:Servico'][0]['ns3:Valores'][0].hasOwnProperty('ns3:ValorLiquidoNfse') ? element['ns3:Servico'][0]['ns3:Valores'][0]['ns3:ValorLiquidoNfse'][0].replace('.',',') : "0"
            };
    
            NF.push(formated);
        } catch (error) {
            console.log(error + " " + element['ns3:IdentificacaoNfse'][0]['ns3:Numero'][0]);
        }

        
    });
    
    excel(NF);
}

module.exports = resultJson;
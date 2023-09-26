const resultJson = (xml) =>{
    let nf = {
        teste: xml['ns2:NFSE']['ns2:Nfse'][0]['ns3:IdentificacaoNfse'][0]['ns3:Numero'][0],
        clientes: xml['ns2:NFSE']['ns2:Nfse'][0]['ns3:PrestadorServico'][0]['ns3:RazaoSocial'][0],
        data: xml['ns2:NFSE']['ns2:Nfse'][0]['ns3:Competencia'][0],
        nfse: xml['ns2:NFSE']['ns2:Nfse'][0]['ns3:IdentificacaoNfse'][0]['ns3:Numero'][0],
        valor: "",
        pis: "",
        cofins: "",
        ir: "",
        inss: "",
        csll: "",
        issRetido: "",
        totalRetencao: "",
        valorLiquido: ""
    };

    return nf;
}

module.exports = resultJson;
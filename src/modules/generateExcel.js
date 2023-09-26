const XLSX = require("xlsx");

const excel = (value) =>{

    try {
        const newBook = XLSX.utils.book_new();
        const newSheet = XLSX.utils.json_to_sheet(value);
        XLSX.utils.book_append_sheet(newBook, newSheet, "Planilha1");
        XLSX.writeFile(newBook, "Relatorio.xlsx");
        console.log("Arquivo gerado");
        
    } catch (error) {
        console.log("Falha ao gerar arquivo: " + error);
    }
}

module.exports = excel;
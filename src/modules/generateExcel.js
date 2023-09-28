const XLSX = require("xlsx");
const XlsxPopulate = require("xlsx-populate");

const excel = (value) => {
  try {
    const newBook = XLSX.utils.book_new();
    const newSheet = XLSX.utils.json_to_sheet(value);
    XLSX.utils.book_append_sheet(newBook, newSheet, "Planilha1");
    XLSX.writeFile(newBook, "Relatorio.xlsx");

    XlsxPopulate.fromFileAsync("Relatorio.xlsx").then((workbook) => {
      // Modify the workbook.

        workbook.sheet("Planilha1").column("D").style("fill", "C6E0B4");
        workbook.sheet("Planilha1").column("L").style("fill", "C6E0B4");
        workbook.sheet("Planilha1").column("M").style("fill", "92D050");
        workbook.sheet("Planilha1").column("P").style("fill", "92D050");
        workbook.sheet("Planilha1").column("Q").style("fill", "92D050");
        workbook.sheet("Planilha1").column("T").style("fill", "92D050");
        workbook.sheet("Planilha1").column("N").style("fill", "DBDBDB");
        workbook.sheet("Planilha1").column("O").style("fill", "DBDBDB");
        workbook.sheet("Planilha1").column("R").style("fill", "DBDBDB");
        workbook.sheet("Planilha1").column("S").style("fill", "DBDBDB");
        workbook.sheet("Planilha1").column("V").style("fill", "DBDBDB");

        workbook.sheet("Planilha1").row("1").style("fill", "9BC2E6");
        workbook.sheet("Planilha1").row("1").style("verticalAlignment", "center");
        workbook.sheet("Planilha1").row("1").style("fontSize", "11");

        workbook.sheet("Planilha1").row("1").style("bold", true);
        workbook.sheet("Planilha1").row("1").height(25);



        workbook.sheet("Planilha1").column("A").style("fontSize", "11");
        workbook.sheet("Planilha1").column("B").style("fontSize", "11");
        workbook.sheet("Planilha1").column("C").style("fontSize", "11");
        workbook.sheet("Planilha1").column("D").style("fontSize", "11");
        workbook.sheet("Planilha1").column("E").style("fontSize", "11");
        workbook.sheet("Planilha1").column("F").style("fontSize", "11");
        workbook.sheet("Planilha1").column("G").style("fontSize", "11");
        workbook.sheet("Planilha1").column("H").style("fontSize", "11");
        workbook.sheet("Planilha1").column("I").style("fontSize", "11");
        workbook.sheet("Planilha1").column("J").style("fontSize", "11");
        workbook.sheet("Planilha1").column("K").style("fontSize", "11");
        workbook.sheet("Planilha1").column("L").style("fontSize", "11");

        workbook.sheet("Planilha1").column("M").style("fontSize", "11");
        workbook.sheet("Planilha1").column("N").style("fontSize", "11");
        workbook.sheet("Planilha1").column("O").style("fontSize", "11");
        workbook.sheet("Planilha1").column("P").style("fontSize", "11");
        workbook.sheet("Planilha1").column("Q").style("fontSize", "11");
        workbook.sheet("Planilha1").column("R").style("fontSize", "11");
        workbook.sheet("Planilha1").column("S").style("fontSize", "11");
        workbook.sheet("Planilha1").column("T").style("fontSize", "11");
        workbook.sheet("Planilha1").column("U").style("fontSize", "11");
        workbook.sheet("Planilha1").column("V").style("fontSize", "11");
        workbook.sheet("Planilha1").column("W").style("fontSize", "11");
        workbook.sheet("Planilha1").column("X").style("fontSize", "11");
        workbook.sheet("Planilha1").column("Y").style("fontSize", "11");


        // Log the value.
        return workbook.toFileAsync("Relatorio.xlsx");
    });

    console.log("Arquivo gerado");
  } catch (error) {
    console.log("Falha ao gerar arquivo: " + error);
  }
};

module.exports = excel;

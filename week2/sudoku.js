htmlText = "<table><tr><caption>Üretken Akademi Sudoku</caption>";
for (let x = 0; x < 3; x++) {
    htmlText += "<tr>";
    for (let i = 0; i < 3; i++) {
        htmlText += "<td><table class='innerTable'>";
        for (let j = 0; j < 3; j++) {
            htmlText += "<tr><td>" + Math.floor((Math.random() * 9) + 1) + "</td><td>" + Math.floor((Math.random() * 9) + 1) + "</td><td>" + Math.floor((Math.random() * 9) + 1) + "</td></tr>";
        }
        htmlText += "</table></td>";
    }
    htmlText += "</tr>";
}
htmlText += "</tr></table>";
document.getElementById("sudoku").innerHTML = htmlText;
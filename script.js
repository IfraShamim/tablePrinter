function tablePrinter() {
    var userInput = document.getElementById("table-number").value;
    var to = document.getElementById("first-number").value;
    var from = document.getElementById("second-number").value;
    var number = parseFloat(userInput);

    var result = "<h2>Multiplication Table of " + number + "</h2>";
    for (var i = parseInt(to); i <= parseInt(from); i++) {
        result += number + " x " + i + " = " + (number * i) + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}

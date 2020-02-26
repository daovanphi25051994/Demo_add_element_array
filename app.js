let arrayNumbers = [];
let textResult = "";

function addElement() {
    let value = document.getElementById("input").value;
    if (value === "") {
        return false;
    } else {
        arrayNumbers.push(value);
        value = document.getElementById("input").value = "";
    }
}

function showElementsOfArray() {
    textResult = "";
    for (let i = 0; i < arrayNumbers.length; i++) {
        textResult += "Element " + i + " = " + arrayNumbers[i] + "<br>";
    }
    document.getElementById("elements-array").innerHTML = textResult;
}
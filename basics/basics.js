function add(n1, n2, showResult, phrase) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Incorrect input!");
    }
    if (showResult) {
        console.log("" + phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var number3 = 8;
var number4 = -9;
var printResult = true;
var resultPhrase = "Result is: ";
add(+number1, number2, printResult, resultPhrase);

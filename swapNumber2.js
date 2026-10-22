// using without third variable
function swapNumber(firstNumber,secondNumber){
    firstNumber = firstNumber + secondNumber;
    secondNumber = firstNumber - secondNumber;
    firstNumber = firstNumber - secondNumber;

    console.log(firstNumber);
    console.log(secondNumber);
}


const firstNumber = 10;
const secondNumber = 20;
swapNumber(firstNumber,secondNumber);
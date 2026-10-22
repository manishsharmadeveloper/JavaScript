// using third variable
function swapNumber(firstNumber,secondNumber){
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;

    console.log(firstNumber);
    console.log(secondNumber);
}


const firstNumber = 10;
const secondNumber = 20;
swapNumber(firstNumber,secondNumber);
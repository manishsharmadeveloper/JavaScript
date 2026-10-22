let number_1 = 10;
let number_2 = 20;
let number_3 = 30;


if (number_1 > number_2 && number_1 > number_3) {
    console.log("number 1 is greater than number 2 and number 3");
} else if(number_2 > number_1 && number_2 > number_3) {
    console.log("number is 2 greater than number 1 and number 3");
} else if(number_3 > number_1 && number_3 > number_2) {
    console.log("number 3 is greater than number 1 and number 2");
} else {
    console.log("number is not valid");
}
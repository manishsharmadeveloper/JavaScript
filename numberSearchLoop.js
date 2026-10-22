let numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("array: ",numberArray);

let searchNumber = 9;
let arraySize = numberArray.length;
let found = false;
for(let index = 0; index < arraySize; index++) {
    if (numberArray[index] == searchNumber) {
        console.log("number is founded at this position: ",index);
        found = true;
        break;
    }
}

if(!found) {
    console.log("number does not exists");
}
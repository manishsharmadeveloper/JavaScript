function inserElements(myArray,newIndex,newElements){
    myArray.splice(newIndex, 0, newElements);
    return myArray;
}


let myArray = [1,2,3,4,5];
console.log("original array: ",myArray);

let newIndex = 2;
let newElements = 10;

myArray = inserElements(myArray,newIndex,newElements);
console.log("after inserting array:");
console.log(myArray);
let a = 10;
let b = 20;

console.log("original value a : ",a);
console.log("original value b : ",b);

a = a + b;
b = a - b;
a = a - b;

console.log("after swap number a : ",a);
console.log("after swap number b : ",b);
let array = ["Manish","Aditya","Hemant","Abhishek"];
let search_name = "Manish";

for(let index = 0; index < array.length; index++) {
    if (array[index] == search_name) {
        console.log("successfully! your record has been matched: ",array[index]);
        break;
    } else {
        console.log("not match");
    }
}
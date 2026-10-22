function voteCheck(age){
    const validAge = 18;
    if (age >= validAge && age <=60) {
        console.log("congratulations you can vote now");
    } else if(age <= 75 ){
        console.log("contact to election comission team");
    } else{
        console.log("sorry you can't vote now");
    }
}


const age = Number(prompt("enter your age : "));
voteCheck(age);
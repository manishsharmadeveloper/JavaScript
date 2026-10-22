function tableDisplay(number){
    const count = 10;
    for(let i = 1; i <= count; i++){
        const results = number * i;
        console.log(number,"*",i," : ",results);
    }
}

const number = 2;
tableDisplay(number);
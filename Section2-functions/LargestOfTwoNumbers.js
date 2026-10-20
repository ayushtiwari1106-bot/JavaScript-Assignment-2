// Create a function that takes two numbers and returns the greater number. 

function largestNum(a,b){
    if(a>b){
        return "A is largest";
    }
    else{
        return "B is largest";
    }
}

let num1 = 30;
let num2 = 92;

let result = largestNum(num1,num2);
console.log(`${result}`);
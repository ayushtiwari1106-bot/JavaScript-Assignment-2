// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n. 
// Example: 
// Input: 5 
// Output: 15 

function sumNumbers(){
    let n = 10;
    sum = 0;
    for(let i = 1; i<=n; i++){
        sum = sum + i;
    
    }
    console.log(sum);
}

sumNumbers();
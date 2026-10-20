// Create a function named calculateTotal(price, quantity) using a function declaration. The function 
// should calculate and display the total price.  
// Example:  
// Input: price = 100, quantity = 3  
// Output: Total Price: 300 

function totalPrice(a,b){
    return a*b;
}

let quantity = 9;
let price = 123;

let total = totalPrice(quantity,price);

console.log(`Total price ${total}`);

const prompt = require('prompt-sync')()

// Program to find the sum of first n natural number
let sum =0;
let n = prompt("Enter The Number Upto which you want it's summation: ");
n = Number.parseInt(n);
if(n<0){
    console.log("You have enterd an invalid number");
}
else if (n==0){
    console.log(0) ;
}
else{
    for(let i=1; i<=n;i++){
         sum += i ;
    }       
    console.log(sum);
}

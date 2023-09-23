
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
// Program for multiplication tabel 
let mul = prompt("Enter the number for which you want multiplication table: ");
mul = Number.parseInt(mul);
for(let j=1; j<=10 ; j++){
   console.log(mul + "x" + j + "=" + (mul*j)  ) 
}

// Program to find square of the number

let sqr = prompt("Enter the number for which you want to find it's square: ");
sqr = Number.parseInt(sqr);
console.log("Square of " + sqr + " is " + sqr*sqr);

// for in loop

let marks = {
    Ramu: 45 ,
    Shyamu: 48,
    Babu: 36
}
for(let a in marks){
    console.log(a + " got " + marks[a] + " Marks.");
}


// for of loop

for (b of "Pavan"){
    console.log(b)
}

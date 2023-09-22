const prompt = require('prompt-sync')();

// If else statments
let age = prompt("Enter your age: ");
console.log(age);

if(age>=18 && age<60){
    console.log("You are elligble");
}
else if(age>=60){
    console.log("You are Senior Citizen");
}
else{
    console.log("You are not elligble");
}

// Switch Case 

const Grade = prompt("Enter your Grade: ");
switch (Grade){
    case 'A':
        console.log("Very Good");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Pass");
        break;
    default:
        console.log("Fail")
}

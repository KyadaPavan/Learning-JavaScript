const prompt = require('prompt-sync')();

let Name = "Pavan"; // String Can be written in double quotes
let Surname = 'Kyada'; // and String can also be written in single quotes


console.log(Surname[0]);  // to get the character at an particular index of string and index starts from 0 
console.log(Surname[1]);

// Tremplate Litrals

let inrto = `Hello, I am ${Name} ${Surname}` ;
console.log(inrto);

// Strings Method

console.log("Length" + Name.length); // to get the length of sring
console.log("Upper Case: " + Name.toUpperCase());
console.log("Upper Case: " + Name.toLowerCase());

console.log("Slicing: " + Name.slice(0,2));
console.log("Slicing: " + Name.slice(2));
 
console.log("Replace: " + Name.replace("Pavan" , "pavan"))

let friend = "Naman" ;
console.log(friend.concat(" is a friend of " + Name));

let white = "      trimedString     " ;
console.log(white);
console.log(white.trim());

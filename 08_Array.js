
const prompt = require('prompt-sync')();

let marks = [98, 56, 78, 80, 93, 45, 69, 75 ,"Absent"];
let fruits = [ "Apple" , "Banana" , "Mango" , "Grapes" , "Orange"];

console.log(marks);

for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}


// Array Methods


let a = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)
let c = num.join(" and ")
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(r, a)
console.log(r)


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum);


// Using Loops to access an array

let ab = [1,5,6,7,9,10,0];

// for loop

for(p=0; p<ab.length; p++){
    console.log(ab[p]);
}

// for each loop

ab.forEach(element => {
    console.log(element*element);
});

// .from --> used to convert HTML collection into an array

let name = "Pavan" ;
let arr = Array.from(name);
console.log(arr);

// for of loop  --> It returns the element of an array

for (const q of ab) {
    console.log(q);
}


// for in loop --> it returns the index of an array

for (const r in ab) {
    console.log(q);
}

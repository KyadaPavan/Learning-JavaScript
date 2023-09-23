const prompt = require('prompt-sync')();

// program to print multiplication table using function

function multiplication(n) {
    for (i = 1; i <= 10; i++) {
        console.log(n + "x" + i + "=" + (i * n))
    }
}

console.log(multiplication(5))

// program to count the number of prime number upto any desired number

function prime(n) {
    let  counter = 0;
    for (i = 1; i <= n; i++) {

        if (i % 2 == 0) {
            counter++;
        }
    }
    console.log("The number of prime number upto " + n + " are " + counter);
}

prime(5);
prime(25);

// program to fine square of a number using arrow function

const square = (n) => {
    let c = n**2;
    console.log("The Square of " + n + " is " + c);
}
square(5);


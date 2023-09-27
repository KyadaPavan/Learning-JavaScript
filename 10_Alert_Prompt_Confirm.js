
let playagain = true;

while (playagain) {
    let a = prompt("Enter your age");
    a = Number.parseInt(a);

    playagain = confirm("Do you want to play again?");

    if (playagain) {
        let a = prompt("Enter your age");
        a = Number.parseInt(a);

        if (a <= 0) {
            console.error("Please, Enter a valid age.");
            document.write("Please Enter a valid age.");
            break;
        }
        else if (a < 18) {
            alert("Sorry! You can't drive");
        }
        else {
            alert("You can drive");
        }

    }
}



// Recreate Sample Output : 
// Today is : Friday. Current time is : 4 PM : 50 : 22
// console.log(date.toDateString()) <== Cool

 // Create days array with all the days.
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Date object assigned to a variable called date.
let date = new Date();

let determineHours = (date) => {
    let morningModifier = "AM"
    let afternoonModifier = "PM"
    let militaryTimeModifier = 12

    let hours = date.getHours();

    if (hours === 0) { // Handle case for midnight.
        return hours + militaryTimeModifier + morningModifier
    } else if (hours === 12) { // Handle case for noon.
        return hours + afternoonModifier
    } else if (hours > militaryTimeModifier) {
        return hours - militaryTimeModifier + afternoonModifier
    } else {
        return hours + morningModifier
    }
}

// console.log("Today is : " + days[date.getDay()]);
// console.log("Current time is : " + determineHours(date) + "  : " + date.getMinutes() + " : " + date.getSeconds());


//Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".

let numberMatchGame = (userNum) => {
    let randomNum = (Math.floor(Math.random() * 10) + 1);
    userNum === randomNum ? console.log("\nGood Work!" + "\nYour Number: " + userNum + "\nActual Number:") : console.log("\nNot Matched!" + "\nYour Number: " + userNum + "\nActual Number: " + randomNum + "\n");
}

// numberMatchGame(2);


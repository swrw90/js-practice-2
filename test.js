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

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

let computeSum = (a, b) => a === b ? (a + b) * 3 : a + b

// console.log(computeSum(3, 3));

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. 

let checkNumbers = (a, b) => a === 50 || b === 50 || a + b === 50

// console.log(checkNumbers(5, 10));

// Write a JavaScript program to check a given integer is within 20 of 100 or 400

let isWithinTwenty = num => num > 79 && num < 121 || num > 379 && num < 421
//console.log(isWithinTwenty(420));

// Write a JavaScript program to check from two given integers, if one is positive and one is negative.

// let isPositiveOrNegative = (a, b) => a % 2 === 0 || b % 2 === 0 ? console.log("Positive") : console.log("Negative")

// isPositiveOrNegative(15, 10);

//or Math.sign or...

let isPositiveOrNegative = (a, b) => {
    // lol wtf?
    // if (a % 2 === 0 && b % 2 === 1) {
    //     console.log(a + " Is positive and " + b + " is negative")
    // } else if (a % 2 === 1 && b % 2 === 0) {
    //     console.log(a + " Is negative and " + b + " is positive")
    // } else if (a % 2 === 0 && b % 2 === 0) {
    //     console.log("Both numbers are positive")
    // } else {
    //     console.log("Both numbers are negative")
    // }

    // that's better lol
    if (a > 0) {
        console.log("positive")
    } else if (a < 0) {
        console.log("negative")
    } else {
        console.log("neither")
    }
}

// isPositiveOrNegative(10, 10);

// Write a JavaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.


let createNewString = str => {
    let strToCheck = "Py";

    if (str.startsWith(strToCheck)) {
        return str
    } else {
        return strToCheck + str
    }

    // return str.startsWith(strToCheck) ? str : strToCheck + str   
}

// console.log(createNewString("Something"));

// Write a JavaScript program to remove a character at the specified position of a given string 
// and return the new string. 

let removeCharacter = (str, index) => {
    let strArr = str.split("")
    strArr.splice(index, 1)
    console.log(strArr.join(""))
}

// removeCharacter("yusuke", 5);


// Write a JavaScript program to create a new string from a given string changing the position of first 
// and last characters. The string length must be greater than or equal to 1

let modifyString = str => {

    if (str.length >= 1) {
        let strArr = str.split("")
        // let lastChar = strArr.splice(str.length - 1, 1)
        // let firstChar = strArr.splice(0, 1)

        let firstChar = strArr.shift();
        let lastChar = strArr.pop();

        strArr.push(firstChar)
        strArr.unshift(lastChar)

        let newStr = strArr.join("")
        console.log(newStr)
    } else {
        console.log("Not a valid entry")
    }
}

// modifyString("Something")

// Write a JavaScript program to check if a string starts with 'Java' and false otherwise (case insensitive).

let includesJava = str => str.startsWith("Java")
// console.log(includesJava("Javascript"));

let java = "java"
let includezJava = str => str.toLowerCase().startsWith("java");

//console.log(includezJava("Javascript"));

// Write a JavaScript program to find the largest of three given integers.

let determineGreatestInt = (a, b, c) => {
    // console.log(Math.max(a, b, c))

    var numbers = [a, b, c];
    var largestNumber = 0

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber
}

// determineGreatestInt(2,43,15)

// Write a JavaScript program to create new string with first 3 characters are in lower case. 
// If the string length is less than 3 convert all the characters in upper case.

let changeStringCase = (str) => {
    if (str.length < 3) {
        return str.toUpperCase()
    } else {
        let strArr = str.split("");
        let newArr = [];

        for (var i = 0; i < strArr.length; i++) {
            if (i < 3) {
                newArr.push(strArr[i].toLowerCase())
            } else {
                newArr.push(strArr[i])
            }
        }

        return newArr.join("")

    }
}

// console.log(changeStringCase("SOMethinG"));

// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
// let applicant = "Seth Watson"

let filterApplicant = applicant => applicant === "Seth Watson" ? console.log("You made the right choice!") : console.log("Wrong choice, try again")

// filterApplicant("sampson")
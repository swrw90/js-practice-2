// Recreate Sample Output : 
// Today is : Friday. Current time is : 4 PM : 50 : 22

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

console.log("Today is : " + days[date.getDay()]);
console.log("Current time is : " + determineHours(date) + "  : " + date.getMinutes() + " : " + date.getSeconds());
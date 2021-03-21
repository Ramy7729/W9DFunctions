// Function 1: Declaring a function and assigning two arguments - numberOne and numberTwo.
function addTimesFive(numberOne, numberTwo) {
    // Creating a variable to add two numbers together: numbers inside the brackets get added first and than the result gets multiplied by five.
    var total = (numberOne + numberTwo) * 5;
    return total;
}

// Verifying answers by passing the function to console.log than printing the result.
console.log(addTimesFive(7,13));
console.log(addTimesFive(1,7));
console.log(addTimesFive(7,9));


// Function 2: Declaring a function and assigning one argument - string
function iAmString(string) {
    
    // Conditional statements that return true or false if the word has more or less than 10 characters. Else as the catcher if true or false is not met.
    if(string.length > 10) {
    return true;
    } else if(string.length < 10 ) {
        return false;
    } else {
        console.log('I am not a string *sadgeface*')
    } 
}
// Verifying answers by passing the function to console.log than printing the result.
console.log(iAmString(7777777));
console.log(iAmString(`seven`));
console.log(iAmString(`seventy-seven`));


// Function 3: Declaring a function and assigning one argument - array.
function phOnly(array) {
    
    // For loop using the length function as a conditional statement.
    for (var i = 0; i < array.length; i++){
        // startsWith function used to find a word in the array that starts with ph.
        if (array[i].startsWith(`ph`)) {
            // Only first element with a ph is returned.
            return array[i];
        }
    }
}

// Verifying answers by passing the function to console.log than printing the result.
console.log(phOnly([`not`, `the`, `bees`, `phew` ]));
console.log(phOnly([`the`, `quick`, `brown`, `fox` ]));
console.log(phOnly([`phasmophobia`, `pharma`, `phoenix`, `photon`]));
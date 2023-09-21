function capitalizeFirstLetter(inputString) {
    if (inputString.length === 0) {
        return inputString; // Return unchanged if the string is empty
    }
    // Capitalize the first letter and append the rest of the string
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
// Get user input using the prompt dialog
const userInput = prompt("Please enter a string:");
if (userInput !== null) {
    const capitalizedString = capitalizeFirstLetter(userInput);
    console.log(capitalizedString);
}
else {
    alert("User canceled or closed the prompt.");
}

function numberToDigitsArray(num: number): number[] {
    if (num < 0) {
      throw new Error("Input must be a non-negative number.");
    }
  
    // Convert the number to a string
    const numStr = num.toString();
  
    // Split the string into an array of individual digits
    const digitsArray = numStr.split('').map(Number);
  
    return digitsArray;
  }
  
  function getUserInputAndConvert() {
    const userInput = prompt("Please enter a non-negative number:");
    
    if (userInput === null) {
      alert("User canceled or closed the prompt.");
      return;
    }
  
    const num = parseFloat(userInput);
  
    if (!isNaN(num) && num >= 0) {
      const digitArray = numberToDigitsArray(num);
      console.log(digitArray)
    } else {
      alert("Invalid input. Please enter a valid non-negative number.");
    }
  }
  
  // Call the getUserInputAndConvert function to start the process
  getUserInputAndConvert();
  
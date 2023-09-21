function removeNonPrintableCharacters(inputString: string): string {
    // Use a regular expression to remove non-printable ASCII characters
    const printableString = inputString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
  
    return printableString;
  }
  
  // Example usage:
  const originalString = "Hello, \x07World!\x1F";
  const cleanString = removeNonPrintableCharacters(originalString);
  console.log(cleanString); 
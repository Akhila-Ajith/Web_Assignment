const secretNumber =  Math.floor(Math.random() * 100) + 1;

    let attempts = 0; // Number of attempts
    const guesses = [];
    let guess = 0;
      let message = '';

      do {
        guess = parseInt(prompt('Guess a number between 1 and 100:'));
        if (isNaN(guess)) {
          alert('Please enter a valid number.');
          continue;
        }

        attempts++;
        guesses.push(guess);

        if (guess < secretNumber) {
          message = 'Too low! Try again.';
        } else if (guess > secretNumber) {
          message = 'Too high! Try again.';
        } else {
          message = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        }

        alert(message);

      } while (guess !== secretNumber);
 // Display the list of all guesses and attempts
 const result = `Guesses: ${guesses.join(', ')}\nTotal attempts: ${attempts}`;
 document.write(result);
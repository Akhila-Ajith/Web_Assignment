const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.querySelector('input[type="submit"]');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

function validateForm() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate username
    if (username.trim() === '') {
        usernameError.textContent = 'Username is required';
    } else {
        usernameError.textContent = '';
    }

    // Validate password
    if (password.length < 5) {
        passwordError.textContent = 'Password must be at least 5 characters long';
    } else {
        passwordError.textContent = '';
    }

    // Enable or disable the submit button based on validation results
    if (username.trim() !== '' && password.length >= 5) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
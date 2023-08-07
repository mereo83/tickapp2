// Placeholder for storing user data (this is not secure for a real application)
let users = [];

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the user exists and the password is correct
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your email and password.');
    }
}

// Example of registering a new user
function registerUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email is already registered
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert('An account with this email already exists.');
    } else {
        // Register the new user
        users.push({ email, password });
        alert('Account registered successfully!');
    }
}

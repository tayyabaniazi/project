// Switch to Sign Up Form
function switchToSignUp() {
    document.getElementById('sign-in-form').classList.add('hidden');
    document.getElementById('sign-up-form').classList.remove('hidden');
}

// Switch to Sign In Form
function switchToSignIn() {
    document.getElementById('sign-up-form').classList.add('hidden');
    document.getElementById('sign-in-form').classList.remove('hidden');
}

// Handle Sign In
function handleSignIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Simple validation (replace with real authentication in a backend)
    if (email === "test@example.com" && password === "password") {
        alert("Sign In Successful!");
    } else {
        alert("Invalid email or password.");
    }
}

// Handle Sign Up
function handleSignUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Store user data locally for demo purposes
    alert(`Welcome ${name}! Your account has been created.`);
    switchToSignIn();
}

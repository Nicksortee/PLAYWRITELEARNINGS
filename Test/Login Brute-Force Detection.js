//Login Brute-Force Detection
//Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).


// Fixed credentials and max failed attempts
const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "Pass@123";
const MAX_FAILED_ATTEMPTS = 3;

// Array of login attempts (simulated)
const loginAttempts = [
    { username: "admin", password: "1234" },    // fail
    { username: "user", password: "Pass@123" }, // fail
    { username: "admin", password: "wrong" },   // fail -> account locked
    { username: "admin", password: "Pass@123" } // should not be allowed
];

// Global counter for failed attempts
var failedAttempts = 0;

// Loop variable
let i = 0;

do {
    let attempt = loginAttempts[i];

    console.log(`Attempt ${i + 1}: username=${attempt.username}, password=${attempt.password}`);

    // Check if account is locked
    if (failedAttempts >= MAX_FAILED_ATTEMPTS) {
        console.log("Account locked due to too many failed attempts!");
        break;
    }

    // Validate credentials
    if (attempt.username === CORRECT_USERNAME && attempt.password === CORRECT_PASSWORD) {
        console.log("Login successful!");
        // Reset failed attempts on success
        failedAttempts = 0;
        break; // exit after successful login
    } else {
        failedAttempts++; // increment failed counter
        console.log(`Login failed! Failed attempts: ${failedAttempts}`);
    }

    i++; // move to next attempt
} while (i < loginAttempts.length);
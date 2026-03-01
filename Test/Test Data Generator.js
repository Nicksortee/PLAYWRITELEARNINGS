//Test Data Generator
//As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

// Fixed roles (constant)
const roles = ["admin", "editor", "viewer", "tester", "manager"];

// Total number of test users
const totalUsers = 12;

// Global counter for unique ID
var globalCounter = 1;

// Array to hold all generated users
let users = [];

for (let i = 0; i < totalUsers; i++) {
    // Generate unique ID in USR-0001 format
    let userId = "USR-" + String(globalCounter).padStart(4, '0');

    // Name and Email
    let name = "User " + globalCounter;
    let email = "user" + globalCounter + "@example.com";

    // Role (cycle through roles array)
    let role = roles[i % roles.length];

    // Active status: every 3rd user inactive
    let isActive = (globalCounter % 3 === 0) ? false : true;

    // Create user object
    let user = {
        id: userId,
        name: name,
        email: email,
        role: role,
        active: isActive
    };

    // Add user to array
    users.push(user);

    // Increment global counter
    globalCounter++;
}

// Print all generated users
console.log(users);
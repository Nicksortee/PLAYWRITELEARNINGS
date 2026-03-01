//Retry Failed API Call
// In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). Log each attempt and print the final result.

let maxRetries = 5;
let attempt = 0;
let success = false;

do {
    attempt++;
    console.log("Attempt #" + attempt);

    let randomValue = Math.random();
    console.log("Random Value:", randomValue.toFixed(2));

    if (randomValue > 0.6) {
        success = true;
        console.log("API Call Successful ✅");
    } else {
        console.log("API Call Failed ❌");
    }

} while (!success && attempt < maxRetries);

if (success) {
    console.log("Final Result: Success after " + attempt + " attempt(s). 🚀");
} else {
    console.log("Final Result: Failed after maximum retries (" + maxRetries + "). ⛔");
}
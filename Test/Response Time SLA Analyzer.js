//Response Time SLA Analyzer As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking.



const responseTimes = [120, 450, 510, 600, 300, 200, 750, 480]; // in ms
const slaThreshold = 500; // SLA in milliseconds

let i = 0;                 // loop index
let min = responseTimes[0]; // initialize min
let max = responseTimes[0]; // initialize max
let sum = 0;                // sum for average
let breachCount = 0;         // count responses > SLA

while (i < responseTimes.length) {
    let time = responseTimes[i];

    // Update min
    if (time < min) {
        min = time;
    }

    // Update max
    if (time > max) {
        max = time;
    }

    // Add to sum
    sum += time;

    // Count SLA breaches
    if (time > slaThreshold) {
        breachCount++;
    }

    // Increment loop counter
    i++;
}

// Calculate average
let average = sum / responseTimes.length;

// Print performance report
console.log("Performance Report:");
console.log("Minimum Response Time:", min, "ms");
console.log("Maximum Response Time:", max, "ms");
console.log("Average Response Time:", average.toFixed(2), "ms");
console.log("Number of SLA Breaches (>500ms):", breachCount);
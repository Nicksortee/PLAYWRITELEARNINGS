// Example bug input
let frequency = "often"; // can be "always", "often", "rarely"
let impact = "major";    // can be "blocker", "major", "minor"

// Variable to store bug severity
let severity;

// Nested if-else for classification
if (frequency === "always") {
    if (impact === "blocker") {
        severity = "P0";
    } else if (impact === "major") {
        severity = "P1";
    } else if (impact === "minor") {
        severity = "P2";
    } else {
        severity = "Unknown Impact";
    }
} else if (frequency === "often") {
    if (impact === "blocker") {
        severity = "P1";
    } else if (impact === "major") {
        severity = "P2";
    } else if (impact === "minor") {
        severity = "P3";
    } else {
        severity = "Unknown Impact";
    }
} else if (frequency === "rarely") {
    if (impact === "blocker") {
        severity = "P2";
    } else if (impact === "major") {
        severity = "P3";
    } else if (impact === "minor") {
        severity = "P4";
    } else {
        severity = "Unknown Impact";
    }
} else {
    severity = "Unknown Frequency";
}

// Print bug severity
console.log("Bug Severity Level:", severity);
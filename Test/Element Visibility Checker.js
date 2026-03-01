//Element Visibility Checker
//In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

//States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
//Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

let element = {
    isPresent: true,     // change to test different scenarios
    isDisplayed: true,
    isEnabled: false
};

// Determine Element State
let state;
if (element.isPresent === false) {
    state = "NOT FOUND";
} else if (element.isDisplayed === false) {
    state = "HIDDEN";
} else if (element.isEnabled === false) {
    state = "DISABLED";
} else {
    state = "READY";
}

// Determine Severity using ternary operator
let severity = (element.isPresent === false) ? "CRITICAL" :
               (element.isDisplayed === false || element.isEnabled === false) ? "WARNING" :
               "OK";

// Suggest QA Action
let action = (state === "READY") ? "Interact with element as usual" :
             (state === "DISABLED") ? "Investigate why element is not enabled" :
             (state === "HIDDEN") ? "Check why element is hidden on UI" :
             "Check if element exists in DOM";

// Print Report
console.log("Element State:", state);
console.log("Severity Level:", severity);
console.log("Action:", action);
//Mini Test Suite Runner
//Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

//Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.//

// ------------------------------
// Mini Test Suite
// ------------------------------

// Array of test cases
const testCases = [
    { name: "Test 1", expected: 5, actual: 5, comparison: "strictEqual" },
    { name: "Test 2", expected: "5", actual: 5, comparison: "looseEqual" },
    { name: "Test 3", expected: "hello", actual: "hello", comparison: "strictEqual" },
    { name: "Test 4", expected: "number", actual: 42, comparison: "typeCheck" },
    { name: "Test 5", expected: true, actual: 1, comparison: "truthy" },
    { name: "Test 6", expected: 10, actual: 7, comparison: "lessThan" },
    { name: "Test 7", expected: null, actual: undefined, comparison: "??" },
];

// Counters
var passCount = 0;      // global counter for passed tests
var failCount = 0;      // global counter for failed tests
var errorCount = 0;     // global counter for errors

// Array to store results
let results = [];

// Run all tests using for loop
for (let i = 0; i < testCases.length; i++) {
    let test = testCases[i];
    let status = "";
    try {
        switch (test.comparison) {
            case "strictEqual":
                status = (test.actual === test.expected) ? "PASS" : "FAIL";
                break;
            case "looseEqual":
                status = (test.actual == test.expected) ? "PASS" : "FAIL";
                break;
            case "typeCheck":
                status = (typeof test.actual === test.expected) ? "PASS" : "FAIL";
                break;
            case "truthy":
                status = (test.actual ? true : false) === test.expected ? "PASS" : "FAIL";
                break;
            case "lessThan":
                status = (test.actual < test.expected) ? "PASS" : "FAIL";
                break;
            case "??":
                status = (test.actual ?? test.expected) === test.expected ? "PASS" : "FAIL";
                break;
            default:
                status = "ERROR";
                break;
        }
    } catch (e) {
        status = "ERROR";
    }

    // Track counts
    if (status === "PASS") passCount++;
    else if (status === "FAIL") failCount++;
    else errorCount++;

    // Store result
    results.push({ name: test.name, status });
}

// Find consecutive passes from start using while loop
let consecutivePasses = 0;
let j = 0;
while (j < results.length && results[j].status === "PASS") {
    consecutivePasses++;
    j++;
}

// Find first failure using do...while loop
let firstFailure = null;
let k = 0;
if (results.length > 0) {
    do {
        if (results[k].status === "FAIL") {
            firstFailure = results[k].name;
            break;
        }
        k++;
    } while (k < results.length);
}

// Print comprehensive report
console.log("Mini Test Suite Report");
console.log("----------------------");
console.log(`Total Tests: ${testCases.length}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Consecutive Passes from Start: ${consecutivePasses}`);
console.log(`First Failure: ${firstFailure ?? "None"}`);
console.log("\nDetailed Results:");
results.forEach(r => console.log(`${r.name}: ${r.status}`));
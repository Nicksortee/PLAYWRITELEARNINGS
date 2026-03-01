
let testResults = ["pass", "fail", "pass", "skip", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;


for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passed++;
    } 
    else if (testResults[i] === "fail") {
        failed++;
    } 
    else if (testResults[i] === "skip") {
        skipped++;
    }
}


let totalTests = testResults.length;
let passRate = (passed / totalTests) * 100;


let verdict;

if (failed === 0) {
    verdict = "Ready for Release ";
} 
else if (failed <= 2) {
    verdict = "Review Required ";
} 
else {
    verdict = "Block Release ";
}

console.log("Total Tests:", totalTests);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Skipped:", skipped);
console.log("Pass Rate:", passRate + "%");
console.log("Verdict:", verdict);
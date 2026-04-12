"use strict";
let bug = {
    id: 101,
    title: "Login button unresponsive on mobile",
    severity: "Critical",
    assignee: "Dev"
};
function formatBug(b) {
    return "BUG-" + b.id + " [" + b.severity + "] " + b.title + " (Assigned: " + b.assignee + ")";
}
console.log(formatBug(bug));

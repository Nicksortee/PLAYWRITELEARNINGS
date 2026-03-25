//1. What is an object in JavaScript?
// An object is a collection of key-value pairs. Example:
let person = {
 name: "Nidhee",
 age: 85,
 city: "Pune"
};

console.log("**************************************");
//2. How do you access object properties?
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

console.log("**************************************");
// 3. Difference between dot and bracket notation
// Dot notation is simpler and more concise, but it only works when the property name is a valid identifier (no spaces, special characters, or reserved words).
// Bracket notation is more flexible and can be used with any property name, but it requires the property name to be a string (or a variable that evaluates to a string).

//Example:
let key = "name";
console.log("With key ",person[key]); // works-> With key  Meeti
console.log("With . ",person.key); // undefined -> With .  undefined

console.log("**************************************");

//4. How to add and delete properties?
// Adding a property
person.gender = "Female";
person["country"] = "India";
console.log("After adding properties:", person);

// Deleting a property
delete person.city;
console.log("After deleting city:", person);

console.log("**************************************");

//5. How to check if a property exists?
console.log("name" in person); // true
console.log("city" in person); // false
console.log(person.hasOwnProperty("age")); // true
console.log(person.hasOwnProperty("city")); // false

//another way to check if property exists is to check if it's undefined
console.log(person.name !== undefined); // true
console.log(person.city !== undefined); // false

console.log("**************************************");

//6. What is Object.keys()?
// Object.keys() returns an array of object's keys
console.log(Object.keys(person)); // ["name", "age", "gender", "country"]

console.log("**************************************");
//7. What is Object.values()?
// Object.values() returns an array of object's values
console.log(Object.values(person)); // ["Meeti", 85, "Female", "India"]

console.log("**************************************");
//8. What is Object.entries()?
// Object.entries() returns an array of [key, value] pairs
console.log(Object.entries(person));

console.log("**************************************");
//9. How to loop through an object?

// Method 1: for...in loop
for (let key in person) {
    console.log(key, person[key]);
}

console.log("---------------------------------");
// Method 2: Object.keys() with forEach
Object.keys(person).forEach(key => {
    console.log(key, person[key]);
});

console.log("---------------------------------");
// Method 3: Object.entries() with forEach
Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
});     
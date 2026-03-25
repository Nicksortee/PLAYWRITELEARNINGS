//✅ 1. What is an object in JavaScript?

//An object is a collection of data stored in key-value pairs.

//👉 Think of it like a real-world thing:

let user = {
  name1: "Nidhee",
  age: 25,
  isLoggedIn: true
};
//name1, age, isLoggedIn // keys (properties)
//"Nidhee", 25, true // values

//📌 So, an object helps you store related data together.


//✅ 2. How do you access object properties?

//You can access values using:

//Dot notation
console.log(user.name1); // Nidhee
//Bracket notation
console.log(user["age"]); // 25


//✅ 3. Difference between dot and bracket notation
//Dot Notation	                        Bracket Notation
//Easy to read	                        More flexible
//Use when key is fixed	                Use when key is dynamic
//Example:
let key = "name1";

console.log(user.key);      // ❌ undefined
console.log(user[key]);     // ✅ Nidhee

//📌 Use bracket notation when key is stored in a variable.

//✅ 4. How to add and delete properties?
//Add property
user.city = "Mumbai";

//OR

user["country"] = "India";

//Delete property

delete user.age;
//✅ 5. How to check if a property exists?
//Method 1: in operator

console.log("name1" in user); // true

//Method 2: hasOwnProperty()
console.log(user.hasOwnProperty("age")); // false (if deleted)

//✅ 6. What is Object.keys()?

//It returns all keys (property names) in an array.

let keys = Object.keys(user);
console.log(keys);

//📌 Output:

//["name", "isLoggedIn", "city", "country"]

//✅ 7. What is Object.values()?

//It returns all values in an array.

let values = Object.values(user);
console.log(values);

//📌 Output:

//["Nidhee", true, "Mumbai", "India"]

//✅ 8. What is Object.entries()?

//It returns key-value pairs as arrays.

let entries = Object.entries(user);
console.log(entries);

//📌 Output:

//[
  //["name", "Nidhee"],
  //["isLoggedIn", true],
  ["city", "Mumbai"]
//]


//✅ 9. How to loop through an object?
//Method 1: for...in loop

for (let key in user) {
  console.log(key, user[key]);
}
//Method 2: Using Object.keys()

Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});

//Method 3: Using Object.entries()

Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
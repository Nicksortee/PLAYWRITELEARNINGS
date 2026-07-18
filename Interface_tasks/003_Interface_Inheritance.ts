//3. Extend interfaces for inheritance

interface BaseUser {
    id: number;
    name: string;
    email: string;
    batch: string;
}

interface User extends BaseUser { // User interface extends BaseUser, so it inherits all properties of BaseUser
    city: string; // New property added in User interface
    phone?: string; // Optional property
    isAdmin?: boolean; // Optional property
}

// Unlike java TS can create object of interface as well
let user1: User = {
    id: 1,
    city: "Pune", // sequence of declaration does not matter, only it should be same as interface
    name: "Nidhee",
    email: "nidhee@example.com",
    batch: "Playwright + AI",
    phone: "987654321",
    isAdmin: true
};  

console.log(user1);
console.log("User Name:", user1.name);// User Name: Nidhee
console.log("Is Admin?", user1.isAdmin); // Is Admin? true
console.log("City:", user1.city); // City: Pune
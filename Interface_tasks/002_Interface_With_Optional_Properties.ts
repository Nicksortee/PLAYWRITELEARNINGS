//2. Create interfaces with optional properties
interface User {
    id: number;
    name: string;
    email: string;
    batch: string;
    phone?: string; // Optional property
    isAdmin?: boolean; // Optional property
}

let user1: User = {
    id: 1,
    name: "Nidhee",
    email: "nidhee@example.com",
    batch: "Playwright + AI",
   
};

console.log(user1); 
console.log("User Name:", user1.name); // User Name: Nidhee
console.log("Is Admin?:", user1.isAdmin); // Is Admin? undefined
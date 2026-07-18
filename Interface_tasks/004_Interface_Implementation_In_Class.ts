//4.  Implement interfaces in class

interface BaseUser {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
}

// Student class implements BaseUser interface, so it must define all properties of BaseUser
class Student implements BaseUser {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    batch: string; // Additional property specific to Student

    constructor(id: number, name: string, email: string, isAdmin: boolean, batch: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
        this.batch = batch;
    }
}

// Admin class also implements BaseUser interface, so it must define all properties of BaseUser
class Admin implements BaseUser {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    role: string; // Additional property specific to Admin

    constructor(id: number, name: string, email: string, isAdmin: boolean, role: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
        this.role = role;
    }
}

// Create instances of Student and Admin
let student1 = new Student(1, "Nidhee", "nidhee@gmail.com", false, "Playwright + AI");
let pramod = new Admin(2, "Pramod", "pramod@tta.com", true, "Super Admin");
let dipak= new Admin(3, "Dipak", "dipak@tta.com", true, "Admin");

console.log(student1);
console.log(pramod);
console.log(dipak);
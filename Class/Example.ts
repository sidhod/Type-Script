// //example-1
// class animals {
//     animal = "";
//     eati = "";
//     run(animal: string) {
//         console.log(`${animal} can run`);
//     }
//     eat(eati: string) {
//         console.log(`${eati} eat`);
//     }
// }
// let lion = new animals();
// let result1 = lion.eat("meat");
// console.log(result1);
// let result2 = lion.eat("meat")
// console.log(result2);

// //example-2
// class users {
//     name = "";
//     setName(name: string) {
//         this.name = name;
//     }
//     display() {
//         console.log(`${this.name}`);
//     }
// }
// let u1 = new users
// u1.setName("sid");
// u1.display();
// u1.name = "Sai"//Public varaible
// u1.display();

// //example-3
// class users {
//     private name = "";
//     setName(name: string) {
//         this.name = name;
//     }
//     display() {
//         console.log(`${this.name}`);
//     }
// }
// let u1 = new users
// u1.setName("sid");
// u1.display();
// //u1.name = "Sai"//private varaible
// u1.display();


//example-4
// //function overloading
// function add(a: string, b: string): string;

// function add(a: number, b: number): number;

// function add(a: any, b: any): any {
//     return a + b;
// }

// add("Sidhodhan ", "Kamble");
// add(10, 20);


// //example-5
// //function overriding
// class ParentClass {
//     display(): void {
//         console.log("Display method from Parent Class!")
//     }
// }

// class ChildClass extends ParentClass {
//     display(): void {
//         super.display()
//         console.log("dislay method from Child Class!")
//     }
// }

// var parentObj = new ParentClass();
// parentObj.display();
// var childObj = new ChildClass();
// childObj.display();

// //example-6
// //inheritance
// class ParentClass {
//     display(): void {
//         console.log("Parent class")
//     }
// }

// class ChildClass extends ParentClass {
//     display(): void {
//         super.display()
//     }
// }
// var childObj = new ChildClass();
// childObj.display();

// //example-7
// class Encapsulate {
//     private str: string = ""
//     set(name: string) {
//         this.str = name;

//     }
//     get() {
//         console.log(`My name is ${this.str}`)
//     }
// }

// var user = new Encapsulate();
// user.set("Sai");
// user.get();

//example 7
// //Abstration
// abstract class Employee {

//     name: string;
//     paymentPerHour: number;

//     constructor(name: string, paymentPerHour: number) {
//         this.name = name;
//         this.paymentPerHour = paymentPerHour;
//     }

//     public abstract calculateSalary(): number;
// }

// class Contractor extends Employee {

//     workingHours: number;
//     constructor(name: string, paymentPerHour: number, workingHours: number) {
//         super(name, paymentPerHour);
//         this.workingHours = workingHours;
//     }

//     calculateSalary(): number {
//         return this.paymentPerHour * this.workingHours;
//     }
// }

// class FullTimeEmployee extends Employee {
//     constructor(name: string, paymentPerHour: number) {
//         super(name, paymentPerHour);
//     }

//     calculateSalary(): number {
//         return this.paymentPerHour * 8;
//     }
// }


// let contractor: Employee;
// let fullTimeEmployee: Employee;
// contractor = new Contractor('Ramesh contractor', 10, 5);
// fullTimeEmployee = new FullTimeEmployee('Ramesh full time employee', 8);

// console.log(contractor.calculateSalary());
// console.log(fullTimeEmployee.calculateSalary());

// example-8
//Interface
interface firstName {
    firstName: string;
    firstName1(): void;
}

interface lastName {
    lastName: string;
}

class Name implements firstName, lastName {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    log() {
        console.log(`My Name is ${this.firstName} ${this.lastName}`);
    }
    firstName1(): void {
        console.log(`My First Name is ${this.firstName}`)
    }
}
const Name1: Name = new Name('Sidhodhan', 'Kamble');
Name1.log();
Name1.firstName1();
//Core Data Type
let num1: number = 10;
let str: string = "Name";
let state: boolean = true
//Explicit Type-Explicit type assignment are easier to read and more intentional.
var num: any = 10;
console.log(num);
//Implicit Type-Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstName = "Sid";
//firstName = 10;//not allow
console.log(firstName)

//Special type
//any-you can use any type
let u: any = true;
u = "string";
console.log(u);

//unknown is a similar, but safer alternative to any.
let name12: unknown = true;
name12 = 12354;
console.log(name12)

//never
// let x1: never;
// x1=45
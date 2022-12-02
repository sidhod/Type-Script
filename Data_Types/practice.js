//Core Data Type
var num1 = 10;
var str = "Name";
var state = true;
//Explicit Type-Explicit type assignment are easier to read and more intentional.
var num = 10;
console.log(num);
//Implicit Type-Implicit - TypeScript will "guess" the type, based on the assigned value:
var firstName = "Sid";
//firstName = 10;//not allow
console.log(firstName);
//Special type
//any-you can use any type
var u = true;
u = "string";
console.log(u);
//unknown is a similar, but safer alternative to any.
var name12 = true;
name12 = 12354;
console.log(name12);
//never
// let x1: never;
// x1=45
//array
var names = [];
names.push("Sid");
//tuple 
var tuple;
tuple = [5, false, 'sidodhan'];
tuple.push(8, true, "sidhodhan");
console.warn(tuple);
//

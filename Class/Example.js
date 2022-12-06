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
var Name = /** @class */ (function () {
    function Name(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Name.prototype.log = function () {
        console.log("My Name is ".concat(this.firstName, " ").concat(this.lastName));
    };
    Name.prototype.firstName1 = function () {
        console.log("My First Name is ".concat(this.firstName));
    };
    return Name;
}());
var Name1 = new Name('Sidhodhan', 'Kamble');
Name1.log();
Name1.firstName1();

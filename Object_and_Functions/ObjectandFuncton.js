//Object in Type script
//Example-1
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
//Example-2
var student = {
    Name: "Sidhodhan",
    Age: 22,
    male: true
};
console.log(student);
//Example-3
var student1 = {
    Age: 22
};
student1.Name = "Sidhodhan";
student1.male = true;
console.warn(student1);
//Function in Type script
//Example-1
function add(num1, num2) {
    return num1 + num2;
}
var result = add(5, 10);
console.log("add", result);
//Example-2
function printdata(value) {
    return value;
}
console.log(printdata("Sai"));
//Example-3
function result1(value) {
    console.log(value);
}
result1("Sai");

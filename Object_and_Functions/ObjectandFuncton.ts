//Object in Type script
//Example-1
const car: { type: string; model: string; year: number; } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
type objtype = { Name?: string, Age: number, male?: boolean };
//Example-2
let student: objtype = {
    Name: "Sidhodhan",
    Age: 22,
    male: true
}
console.log(student);


//Example-3
let student1: objtype = {
    Age: 22,
}
student1.Name = "Sidhodhan";
student1.male = true;
console.warn(student1);

//Function in Type script
//Example-1
function add(num1: number, num2: number) {
    return num1 + num2;
}
let result = add(5, 10);
console.log("add", result);

//Example-2
function printdata(value: string): string {
    return value;
}
console.log(printdata("Sai"));


//Example-3
function result1(value: string): void {
    console.log(value)
}
result1("Sai");

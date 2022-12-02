//enum:An enum is a special "class" that represents a group of constants (unchangeable variables).
//Example-1
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

//Example-2
enum Role {
    ceo,
    manager,
    asstmanager,
    worker
}
console.log(Role.manager);
console.log(Role.ceo);

enum Name {
    Sai = 1,
    Sid,
    Sujal,
    Sarathi
}
console.log(Name.Sid);


//Union
// Example-1
let arr: (string | number)[] = [1, "Sai", "Kamble"];
console.log(arr);

//Example-2
let code: number | string | boolean;
code = 5;
code = "Sidhodhan";
code = true;
console.log(code);

// Literals
//Example-1
let code1: "abc" | 123 = "abc";
console.log(code1);
//code1=456; give Error
code1 = 123;
console.log(code1)

//Example-2
let password: "123" | 123 = "123";
console.log(password);
password = 123;
console.log(password);
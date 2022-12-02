//enum:An enum is a special "class" that represents a group of constants (unchangeable variables).
//Example-1
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
//Example-2
var Role;
(function (Role) {
    Role[Role["ceo"] = 0] = "ceo";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["asstmanager"] = 2] = "asstmanager";
    Role[Role["worker"] = 3] = "worker";
})(Role || (Role = {}));
console.log(Role.manager);
console.log(Role.ceo);
var Name;
(function (Name) {
    Name[Name["Sai"] = 1] = "Sai";
    Name[Name["Sid"] = 2] = "Sid";
    Name[Name["Sujal"] = 3] = "Sujal";
    Name[Name["Sarathi"] = 4] = "Sarathi";
})(Name || (Name = {}));
console.log(Name.Sid);
//Union
var arr = [1, "Sai"];
console.log(arr);

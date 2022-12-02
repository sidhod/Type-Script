//Example 1 String array
let arr: string[] = [];
arr.push("Sai");
arr.push("sidh");
arr.pop();
console.log(arr);

//Example 2 Numebr Array
var num: number[] = [];
// num.push("Sai");   error
num.push(5);
num.push(6);
num.pop();
console.log(num);


//Example 3 Numebr Array
var num: number[] = [1, 2, 3, 4];
// num.push("Sai");   error
num.push(5);
num.push(6);
num.pop();
num.shift();
console.log(num);
num.unshift(1)
console.log(num);
num.splice(2, 0, 5);
console.log(num);

//A tuple is a typed array with a pre-defined length and types for each index.
//Example-1
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'sik'];
ourTuple.pop();
ourTuple.push(5);//
console.log(ourTuple);

//Example-2 
let Tuple: readonly [number, boolean, string] = [5, false, 'sid'];
//Tuple.pop(); not allow
console.log(Tuple);
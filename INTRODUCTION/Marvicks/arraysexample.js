// let person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 30,
//     gender : "male"
// }
// console.log(person);
// console.log(person.firstName);


// let array = [];
// let arr = new Array(3);
// array[0] = "Hello";
// arr[0] = 1
// arr[1] = 2
// arr[4] = 3
// arr[2] = 4
// console.log(arr)

//  Arrays methods

// 1. push and pop. 
// push example;
 
let number = [1,2,3,4,5,6,7];
// number.pop()
// console.log(number)
// number.push(8)
// console.log(number)

// // 2. Shift and  unshift;
// // shift.
// number.shift()
// console.log(number)
// // unshift
// number.unshift(5)
// console.log(number)

// 3. slice and splice;
// slice
// console.log(number.slice(1,5));

// splice
// number.splice(1,4)
// console.log(number)
// splice remove
// console.log(number.splice(2,4));
// console.log(number);

// splice add
// console.log
// (number.splice(2,3,2,2,3,4,5,10));
// console.log(number);

// 4. concat;

let num = [11,12,13]
let result = number.concat(num)

console.log(number.concat(num))
console.log(result)

let display = [["car",2000], ["truck",500],["bike",6500]]
console.log(display)
console.log(display[0][0])
console.log(display[0][1])
console.log(display[2][0])
let display1 =  [["scooter",1500]]
let result1 = display.concat(display1)
console.log(result1) 

let display3 = [["car",2000,], ["truck",500,],["bike",6500,]]

display3[0].push(["Toyota","Nissan"])
display3[1].push(["Ford"])
display3[2].push(["Honda"])
console.log(display3)


// example

let input = [[200,50,300,5], [10,25,7,100], [25,20,70,45], [500,170,11,35]]
console.log([input[1][0],input[1][1],input[1][2]])

// input[1].pop()
// console.log(input[1])

input[0].shift()
console.log(input[1])

input[0].slice()
console.log(input[1])










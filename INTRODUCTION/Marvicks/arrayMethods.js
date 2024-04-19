// Array methods.

// 1. filter method
// when using filter method, what you want to filter must be an array.
// it basically use for separation in general.


function evenNumbers(numbers) {
    return numbers.filter(numbers=>numbers % 2 == 0)
   }


let array = [1,3,4,5,6]
let answer2 = array.filter(num => num % 2 == 0).map(num => num * 10)
console.log(answer2)





// 2. forEach method 
// let array = [1,3,4,5,6]
let arr = [];

// array.forEach((num)=>{ console.log(num*2);})

 array.forEach((num)=>{ arr.push(num*2);})
 
console.log(arr)

// 3. map method
// iliterating through the array, it is a very powerful tools compare to foreach.
let answer = array .map((num) => num % 2 == 1)
console.log(answer)
let answer1 = array .map((num) => num * 2)
console.log(answer1)
let studentScore = [95,75,85,60,45,92]
let grade = []
studentScore.map(score => {
    if(score > 89 && score < 101){
    grade.push("A")}
    if(score > 79 && score < 90){
    grade.push("B")}
    if(score > 69 && score < 80){
    grade.push("C")}
    if(score > 59 && score < 70){
    grade.push("D")}
    if(score > 0 && score < 60){
    grade.push("F")}
})
console.log(grade)
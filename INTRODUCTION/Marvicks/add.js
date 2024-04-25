function addNumbers(x,y) {
    let answer = x + y;
    return answer
    
}
// console.log(addNumbers(2,3));

function evenNumbers(numbers) {
    return numbers.filter(numbers=>numbers % 2 == 0)
}


function studentGrade(Scores){
// let Scores = [95,75,85,60,45,92]
let grade = []
Scores.map(score => {
    if(score > 89 && score < 101){
    grade.push("A")}
    if(score > 79 && score < 90){
    grade.push("B")}
    if(score > 69 && score < 80){
    grade.push("C")}
    if(score > 59 && score < 70){
    grade.push("D")}
    if(score < 60){
    grade.push("F")}
})
return grade


}



function game(obj){
    // let obj = [95,75,85,60,45,92]
    let game = []
    Scores.map(score => {})

}

// function gen(obj, num1, num2 ) {
//     return obj.map(item => item.value)
    

// let obj = [
//     {row : 0, col : 0, value: "x"},
//     {row : 0, col : 1, value: "x"},
//     {row : 0, col : 2, value: "o"},
//     {row : 1, col : 0, value: "o"},
//     {row : 1, col : 1, value: " "},
//     {row : 1, col : 2, value: "x"},
//     {row : 2, col : 0, value: "x"},
//     {row : 2, col : 1, value: "o"},
//     {row : 2, col : 2, value: "o"}

// ];
// }
//  console.log(gen(obj))


function gen(length, width, obj ) {
    let arr = [];
    for (let index = 0; index < length; index++ ){
        arr.push([]);
        for (let ind = 0; ind < width; ind++)
        arr[index].push(" ");
    }

    obj.map(obj => arr[obj.row][obj.column] = obj.value);
    return arr;    
}


let length = 3;
let width = 3 ;
let obj = [
    {row : 0, column : 0, value: "x"},
    {row : 0, column : 1, value: "x"},
    {row : 0, column : 2, value: "o"},
    {row : 1, column : 0, value: "o"},
    // {row : 1, column : 1, value: " "},
    {row : 1, column : 2, value: "x"},
    {row : 2, column : 0, value: "x"},
    {row : 2, column : 1, value: "o"},
    {row : 2, column : 2, value: "o"}

];

 console.log(gen(length,width,obj));


module.exports = {addNumbers,evenNumbers,studentGrade,gen};
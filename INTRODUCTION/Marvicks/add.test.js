let {addNumbers,evenNumbers,studentGrade,gen} = require("./add.js")
// test takes in description and a call back function.
test("add two numbers", () =>{
    let a = 3;
    let b = 5;
    let answer = addNumbers(a,b);

    expect(answer).toBe(8);
}) 


test("filter even numbers", () =>{
    let arr = [1,2,3,4,5,6];
    let answer = evenNumbers(arr);
    expect(answer).toEqual([2,4,6]) 
})

test("map the number to  ", () =>{
    let score = [95,75,85,60,45,92];
    let answer = studentGrade(score);
    expect(answer).toEqual([ 'A', 'C', 'B', 'D', 'F', 'A' ]) 
})

test("game mapping  ", () =>{
    
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
    let answer =[ ["x","x","o"],["o"," ","x"],["x","o","o"] ];
    expect(gen(length,width,obj)).toEqual(answer) 
})

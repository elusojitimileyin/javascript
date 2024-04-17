
 // nested function

// function calc(x){
//     function secondNum(a){
//         return a*x;
//     }
//     console.log(secondNum(2))
// }
// calc(3);

// function calc(x){
//     function secondNum(a){
//         return a*x;
//     }
//     return secondNum;
// }
// console.log(calc(3)(2));



// console.log(calc(3)(2));

// function calc(x){
//     function secondNum(a){
//         return a*x;
//     }
//     return secondNum;
// }
// let result = calc(3);
// console.log(result(2));
// console.log(calc(3)(2));

// arrow function

// console.log(calc(3)(2));


// const calc =  (x) => {
//     function secondNum (a){
//         return a * x;
//     }
//     return secondNum
// };

// function as an argument is also called CallBack function

function higherOrderFunction(func){
    console.log("higher function")
    func();
}
// function lowerOrderFunction(){
//     console.log("lower function")
// }
// higherOrderFunction(lowerOrderFunction)

// higherOrderFunction(function lowerOrderFunction(){
//     console.log("lower function")
// })

higherOrderFunction(() => {
    console.log("lower function")
})


// function as a object

function greetings(greet) {
    return function person(name){
        return`Hello, ${name}. ${greet}`;
    }
}
console.log(greetings("Good morning!")("John"));
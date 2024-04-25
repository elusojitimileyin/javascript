let {setProductOfMaximumNumber,addOneToTheLastIndexOfAndArrayInput} = require("./femiTask.js")
// const {addOneToTheLastIndexOfAndArrayInput} = require("./femiTask.js")

test("get the product of number in an array  ", () =>{
    let array = [1, 5, 10, 4, 0];
    let answer = setProductOfMaximumNumber(array);
    expect(answer).toEqual(50)


})


test("get the number in an array after adding 1 to the last index 1 ", () =>{
    expect([5,2,3,1,3]).toEqual(addOneToTheLastIndexOfAndArrayInput([5,2,3,1,2]));
})

test("get the number in an array after adding 1 to the last index 1 ", () =>{
    expect([2,4,1,0,0]).toEqual(addOneToTheLastIndexOfAndArrayInput([2,4,0,9,9]));
})

test("get the number in an array after adding 1 to the last index 2 ", () =>{
    expect([1,0,0,0,0]).toEqual(addOneToTheLastIndexOfAndArrayInput([9,9,9,9]));
})

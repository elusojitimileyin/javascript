let {setProductOfMaximumNumber,addOneToTheLastIndexOfAndArrayInput} = require("./femiTask.js")

test("get the product of number in an array  ", () =>{
    let array = [1, 5, 10, 4, 0];
    let answer = setProductOfMaximumNumber(array);
    expect(answer).toEqual(50)


})


test("get the number in an array after adding 1 to the last index 1 ", () =>{
    expect([5,2,3,1,3]).toEqual(addOneToTheLastIndexOfAndArrayInput([5,2,3,1,2]));
})


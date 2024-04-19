let {setProductOfMaximumNumber} = require("./femiTask.js")

test("get the product of number in an array  ", () =>{
    let array = [1, 5, 10, 4, 0];
    let answer = setProductOfMaximumNumber(array);
    expect(answer).toEqual(50)
})
/*
The following code contains test cases for fibonacci program.

To run test cases, In terminal type "yarn test" command.
*/

//import fibonacci function from app.js for unit testing.
const {fibonacci} = require('../app')



//Test case to Check fibonacci function output for given number.
test('fibonacci-Check fibonacci function output for given number',()=>{
    expect(fibonacci(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
})

//Test case to check function returning something.
test('fibonacci-Check function returning something',()=>{
    expect(fibonacci(8)).toBeDefined()
})

//Test case to Check fibonacci function not return null.
test('fibonacci-Check fibonacci function not return null',()=>{
    expect(fibonacci(8)).not.toBeNull()
})

// Test case to check number of elements returned.
test('fibonacci-check number of elements returned',()=>{
    expect(fibonacci(8).length).toStrictEqual(9)
})

//Test case to check special character as input.
test('fibonacci-check special character as input',()=>{
    expect(fibonacci('$')).toStrictEqual(false)
})

//Test case to check negative number as input.
test('fibonacci-check negative number as input',()=>{
    expect(fibonacci(-8)).toStrictEqual(false)
})

//Test case to check any string as input.
test('fibonacci-check any string as input',()=>{
    expect(fibonacci('test')).toStrictEqual(false)
})

/*
The following program contains source code to display the first n Fibonacci numbers.
Each subsequent number is the sum of the previous two.
Assuming n is set to 8 the following Fibonacci sequence should be displayed -> 0,1,1,2,3,5,8,13

To run program, In terminal type command "node app.js".

*/

/**
 * 
 * @param {number} n number to display first n fibonacci number.
 * @returns {array/false} if n is valid positive number then it returns array else return false.
 */
var fibonacci =function(n){
    try {
        //To check if number is integer and not a negative number
        if(Number.isInteger(n) && n>0){
            if(n==1){
                return[0,1];
            }else{
                var arr = fibonacci(n-1);
                arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
                return arr;
            }
        }
        else{
            return false
        }
        
    } catch (error) {
        console.log(error)
    }
        
};

/**
 * Code to get input from a readable stream such as the process.stdin stream
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  /**
   * Function to get user input from console and provide result by calling fibonacci method.
   */
  var getUserInput = function() {
      try {
        readline.question(`Enter the number of terms = `, function(num) {
            num=num-1
            if (fibonacci(num)==false){
                console.log('Please enter valid positive number.')
                getUserInput();}
            else {
                console.log("Fibonacci series = ",fibonacci(num).toString())
                readline.close()
            }
            
          })
          
      } catch (error) {
        console.log(error)
      }
  }

  /**
   * Code instruct node js to export fibonacci method from app.js file so other files are allowed to access it
   */
  module.exports={
    fibonacci
  }

  getUserInput();
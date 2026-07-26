
// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
//• Output Example: 130

const result=Number("123") + 7;
console.log(result)



// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

// const value= 0;
// if(value=== false ){
//     console.log("invalid")
// }

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9


for(let i =0; i<=10; i++){
 if(i%2===0){
    continue;

}
console.log(i)
}

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]

const arr= [1, 2, 3, 4, 5]
const evenNumbers=arr.filter((num)=> num%2===0)
console.log(evenNumbers)

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

const array1=[1, 2, 3]
const array2=[4, 5, 6]

const mergedArray=[...array1, ...array2]
console.log(mergedArray)


// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

let dayNumber=3;
switch(dayNumber){
    case 1:
        console.log("saturday")
        break;
    case 2:
        console.log("sunday")
        break;
    case 3:
        console.log("monday")
        break;
    default:
        console.log("monday")
        break;
}


// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

const strArray=["a", "ab", "abc"]

const lengths=strArray.map((str)=>str.length )
console.log(lengths);


// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

function divisible(num){
    if(num % 3===0&& num % 5===0)
        return "Divisible by both"
}

const number=divisible(15);
console.log(number);


// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

const squareNum=(num)=>{
    return num * num 
}

console.log(squareNum(5))


// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

const person = {name: 'John', age: 25}
function formtstr({name, age}){
    return `${name} is ${age} years old`
}

console.log(formtstr(person))


// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

function sum(num1, num2, num3, num4, num5){
    return num1 + num2 + num3 + num4 + num5; 
}

console.log(sum(1, 2, 3, 4, 5))


// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

function largestNum(...nums){
    for(let i=0; i<nums.length;i++){

    }
}

console.log(largestNum([1, 3, 7, 2, 4]))


// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

function key(obj){
    return Object.keys(obj)
}

const obj={name: "John", age: 30}
console.log(key(obj))


// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

function splitWords(strr){
    return strr.split(" ")
}

const strr= "The quick brown fox"
console.log(splitWords(strr))


/**-------------------------------------------------------------------------------- */
// B. Part 2: Essay Questions (2.5 Grade): 

//1. What is the difference between forEach and for...of? When would you use each?


// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

/**
 * hosting=> moving declarations to the top of their scope before code execution.
 *  However, only declarations are hoisted,
 */

console.log(x);

var x= 10;

/**
 * temprory dead zone =>the period between entering a block scope and 
 * the point where a let or const variable is declared.
 *  Accessing the variable during this time causes a ReferenceError
 */

console.log(a); // ReferenceError
let a = 5;


// 3. What are the main differences between == and ===? (0.5 Grade)



// 4. Explain how try-catch works and why it is important in async operations.

/**
 * The try...catch statement is used to handle errors
 *  in JavaScript without stopping the entire program.
 */
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch data:", error.message);
  }
}

fetchData();


// 5. What’s the difference between type conversion and coercion? Provide examples of each.
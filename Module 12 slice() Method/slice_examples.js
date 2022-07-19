// Module 12.2.1: Functional JavaScript
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-1-functional-javascript?module_item_id=498975

// The slice() Method
// In this 1st example, the slice()method returns the first two elements of the integer array: [0,1]
//      (1) The first argument is the position of where to begin the selection. Here, it is at index position 0.
//      (2) The next argument, 2, denotes the position of the array where the slicing ceases.
//
//          (The slice() method begins selecting the array at index position 0, 
//          and stops right before reaching index position 2.)
//          
//           It returns elements at index positions 0 and 1, but not 2.


var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

let str = "Original array of integers: \n[0,1,2,3,4,5]; \nArray after using slice() method: ";
console.log(str);
console.log(slice1);

// ___________________________________________________________________________________________________

// Skill Drill
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// Use slice() to select the first three elements of the words array.

console.log("");
console.log("");
console.log("(Skill Drill: select first three elements of the array)");

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// Index 0 = seal <--- start at index 0
// Index 1 = dog
// Index 2 = scorpion
// Index 3 = orangutan <--- stop right before index 4 (index for 'orangutan' not included)
// Index 4 = salamander

// Select the first three elements of the words array.
var slice2 = words.slice(0,3);

let str2 = "Original array of words: \n['seal', 'dog', 'scorpion', 'orangutan', 'salamander']; \nArray after using slice() method: ";
console.log(str2);
console.log(slice2);

// ___________________________________________________________________________________________________

console.log("");
console.log("");


console.log("(Slice the end of the array)")
// In this 2nd example, to slice to the end of an array, you can omit the second argument:
var words2 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sliceEnd = words.slice(3, );

console.log(str2);
console.log(sliceEnd);

// // Self-note:
// (To run this file in VS Code terminal, type: node slice_example.js in the VS Code terminal.)
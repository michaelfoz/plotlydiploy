// Module 12.2.1: Functional JavaScript
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-1-functional-javascript?module_item_id=498975

// JavaScript arrays have a built-in method that will loop over each element of the array
// (This method is the map() method.)
//      map()--->(1) loops through each array element
//               (2) performs logic on each array element
//               (3) returns a new array with modified elements
//
// Example: performing mathematical operations on each element of an array
//      (Take an array of numbers, square them and return a new array of squared
//      values to a new variable.)

let numbers = [1,2,3,4];

let squared = numbers.map(number => number*number);

console.log(squared);



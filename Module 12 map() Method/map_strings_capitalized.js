// Module 12.2.1: Functional JavaScript
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-1-functional-javascript?module_item_id=498975

// JavaScript arrays have a built-in method that will loop over each element of the array.
// (This method is the map() method.)
//      map()--->(1) loops through each array element
//               (2) performs logic on each array element
//               (3) returns a new array with modified elements

// Example: an array of strings saved to variable [words]

let words = ['these', 'words', 'need', 'capitalized'];

// capitalize all of the letters in each of the words using the map() method and save it to a new variable [caps]
// (Inside of the map method, create an arrow function to capitalize each word by using the toUppercase() method.)
let caps = words.map(word => word.toUpperCase());
// the [caps] variable will be sent to an array of the same words from the original array.

// When sending the [caps] array to the console, each word is capitalized. 
console.log(caps);

// Self-note:
// (To run this file in VS Code terminal, type: node map_strings_capitalized.js in the VS code terminal)
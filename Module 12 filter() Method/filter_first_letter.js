// Module 12.2.1: Functional JavaScript
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-1-functional-javascript?module_item_id=498975

// The filter() method
// Another functional programming technique is the filter() method. 
//      Like the map() method, it accepts another function as its parameter. 
//      Like map(), filter() performs an operation on every element in the original array. 
//      Unlike map(), however, filter()does not necessarily return an array whose length is the same as the original array.

// SKILL DRILL
//  You are given the following array:
//  var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
//
//  Filter the results to include only animals whose species name starts with the letter "s."

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var letterSOnly = words.filter(function(word) {
    return word[0] === "s";
});

console.log(letterSOnly);

// Self-note:
// (To run this file in VS Code terminal, type: node filter_first_letter.js in the VS code terminal.)
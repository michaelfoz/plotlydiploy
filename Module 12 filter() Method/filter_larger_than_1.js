// Module 12.2.1: Functional JavaScript
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-1-functional-javascript?module_item_id=498975

// The filter() method
// Another functional programming technique is the filter() method. 
//      Like the map() method, it accepts another function as its parameter. 
//      Like map(), filter() performs an operation on every element in the original array. 
//      Unlike map(), however, filter()does not necessarily return an array whose length is the same as the original array.

// Example: filter() method returns an array of integers that are larger than 1: [2,3,4,5].

// Create a numbers array (1-5)
var numbers = [1,2,3,4,5]; 

// The numbers array uses the filter() method
var larger = numbers.filter(function(num){
//      The filter() method, in turn, takes an anonymous function as its argument. 
//      (The anonymous function's sole task is to take in a parameter, called num.)

//  filter() method returns  an array of values that meet certain criteria.
//  (Values in the original array that do not fulfill the condition are filtered out.)
    return num > 1;

});

console.log(larger);

// Self-note:
// (To run this file in VS Code terminal, type: node filter_larger_than_1.js in the VS code terminal.)
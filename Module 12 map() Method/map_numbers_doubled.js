// Module 12.2.1: Functional JavaScript
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-1-functional-javascript?module_item_id=498975

// JavaScript arrays have a built-in method that will loop over each element of the array.
// (This method is the map() method.)
//      map()--->(1) loops through each array element
//               (2) performs logic on each array element
//               (3) returns a new array with modified elements

// Here is an example in which all the numbers of an array are doubled:

// An array named numbers contains five integers: var numbers = [1,2,3,4,5].
var numbers = [1,2,3,4,5];

// Inside the map() method, there is another function. 
// This function is anonymous, meaning that the function does not have a name. 
// (When map() is called, it in turn calls this anonymous function.)
var doubled = numbers.map(function(num){
    // The anonymous function takes a parameter, named num, and returns the number multiplied by 2. 
    // Its sole task is to perform this single action.

        // (In the anonymous function inside the map()method, the parameter name num is arbitrary.
        // It could have been named anything else, such as integer or carPrice.)

    return num * 2;

        // (For every element in the array, the map() method calls the 
        // anonymous function, which doubles the value of the element.)

});

// The map()method returns an array of doubled values, which is assigned the variable doubled.

console.log(doubled);

// Here, the map()function becomes a method of the numbers array. It then takes in an anonymous function whose sole task is to double the value of num, its argument.

// Behind the scenes, an iterative process similar to a for loop takes place. 
// The anonymous function takes in each integer of the numbers array and doubles it. 
// Finally, the variable [doubled] is an array of integers whose values are twice their original values.


// Self-note:
// (To run this file in VS Code terminal, type: node map_numbers_doubled.js in the VS code terminal.)
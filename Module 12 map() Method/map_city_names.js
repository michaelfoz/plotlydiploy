// Module 12.2.1: Functional JavaScript
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-1-functional-javascript?module_item_id=498975

// JavaScript arrays have a built-in method that will loop over each element of the array.
// (This method is the map() method.)
//      map()--->(1) loops through each array element
//               (2) performs logic on each array element
//               (3) returns a new array with modified elements

// Example: map() is used to extract a specific property from each object in an array.

// (1) cities is an array of objects. 
//      Each object has multiple properties, such as Rank, City, and State.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

// (2) The map() method is used to extract only the City property of each object, 
//      i.e., San Antonio, Phoenix, and Dallas. During each iteration, 
//      the anonymous function inside map() returns only that property of each object.
var cityNames = cities.map(function(city){
    return city.City;
});

// (3) cityNames is an array of only these city names.
console.log(cityNames);

// Self-note:
// (To run this file in VS Code terminal, type: node map_city_names.js in the VS code terminal)
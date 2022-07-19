// Module 12.1.4: Create a Pie Chart
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-1-4-create-a-pie-chart?module_item_id=498966

// Troubleshooting practice

// (Commented out) var trace = {
// (Commented out)     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
// (Commented out)        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
// (Commented out)     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
// (Commented out)     type: 'pie'
// (Commented out)   };
// (Commented out)   var data = [trace];
// (Commented out)   var layout = {
// (Commented out)     title: "'Pie' Chart",
// (Commented out)   };
// (Commented out)   Plotly.newPlot("plotArea", data, layout);

// Troubleshooting practice
// Q: Why doesn’t the pie chart display on the browser?
//
// var trace = {
//  x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//  "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//
// y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
// type: 'pie'
// };
//
// A: 
// (1) When specifying the chart type, ‘pie’ should be capitalized.
// (2) In trace, the data arrays have x and y keys: 
//          This causes a problem because a pie chart does not have x and y axes. 
//          Different keys should be used. 
// (3) In trace, the data arrays have x and y keys: They need to be wrapped inside an object.
//
//
//--------------------------------------------------------------------------------------------------------

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);
// Module 12.1.3: Create a Bar Chart
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-1-3-create-a-bar-chart?module_item_id=498963

// Create a [basic] Bar Chart
// (Commented out, a better bar char is below) var trace = {
// (Commented out, a better bar char is below)     x: ["burrito", "pizza", "chicken"],
// (Commented out, a better bar char is below) // (Commented out, a better bar char is below)     y: [10, 18, 5],
// (Commented out, a better bar char is below)    type: "bar"
// (Commented out, a better bar char is below)  };

// (Commented out, a better bar char is below)  Plotly.newPlot("plotArea", [trace]);

// Self-notes:
// This code for Bar Chart vs the Code for Line Graph:
//
// Line graph code:
//      Plotly.newPlot("plotArea", [{x:[1,2,3], y:[10,20,30]}])
//
// Bar Chart code:
//      (1) The data is no longer contained inside the Plotly.newPlot() method. The object that contains the x and y arrays is instead assigned to the variable "trace." This variable, trace, is the second argument of the newPlot(). Note, however, that the contents of the variable have been enclosed inside an array. 
//          The effect is still the same: an object contained inside an array.
//
//      (2) The trace object now specifies the chart as a bar chart with type: "bar".
//
//              Important: Note that it makes sense to assign the data to a variable, as it would be very unwieldy to place an 
//              entire dataset inside the Plotly.newPlot() function call. 😭😭😭



// (Commented out) // Choosing Layout Options
// (Commented out) var trace = {
// (Commented out)     x: ["burrito", "pizza", "chicken"],
// (Commented out)     y: [10, 18, 5],
// (Commented out)     type: "bar"
// (Commented out) };

// (Commented out) // Add a title--->The variable [layout] contains the [key] title :and the [value] "Luncheon Survey"
// (Commented out) var layout = {
// (Commented out)     title: "Luncheon Survey",

// (Commented out)     // Add label for x-axis
// (Commented out)     xaxis: {title: "Food Option"},

// (Commented out)     // Add label for y-axis
// (Commented out)     yaxis: {title: "Number of Respondents"}
// (Commented out) };

// (Commented out) // Plotly has a 3rd argument: [layout]--->refers to the [layout] object that contains the title
// (Commented out) Plotly.newPlot("plotArea", [trace], layout);



var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);
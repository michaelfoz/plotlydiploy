// Create a line chart
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// (This single line of code creates the chart.)
//     Plotly.newPlot() is the method that creates the chart
// 
//     The method has 2 arguments:
//         (1) The 1st argument in Plotly, newPlot() is "plotArea."
//             This corresponds with the ID of the <div> tag in the HTML document.
//         
//         (2) The 2nd argument is an array (as indicated by square [] brackets).
//             Inside the array is an object (as notated in curly {} brackets).
//                 Inside {}, x and y are specified.
// 
//                     (The x and y values are conatined inside arrays as well.)
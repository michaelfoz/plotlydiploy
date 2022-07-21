// Created per Module 12.2.2: Practicing JavaScript Methods
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-2-2-practicing-javascript-methods?module_item_id=498978
//
// Order of events: 
// 1st, data.js was downloaded
// 2nd, index.html (created)
// 3rd, plot.js (this file created last)

// To verify that the data is correctly read in, 
// go to the browser and
// call "console.log(cityGrowths);"" in plot.js (this file).



// Next: 
// (1) Sort the cities in descending order of population growth.
// (2) Select only the top five cities in terms of growth.

    // The sort() method takes in a and b as arguments and subtracts the Increase_from_2016 property to sort the cities. 
    // Remember that a and b are arbitrarily named. 
    // (Here, a is one city in the dataset, and b is the next city that is listed in the dataset.)
    // Example: 
    // var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
    // var topFiveCities = sortedCities.slice(0,5);

// Example above applied
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityNamesBarChart = topFiveCityNames.slice(0,5);


// (3) Create separate arrays for the city names and their population growths (in preparation for creating a bar chart).

    // Now we need to create two arrays: an array of city names, 
    // and an array of corresponding population growths. 
    // We'll use the map() method to extract these properties. 
    // (These arrays will be the x and y axis data of the Plotly chart below.)

        // Keep in mind  values in the dataset are strings. 
        // For example, in this object (from the data.js file), the numerical values are formatted as strings 
        // (as indicated by the quotation marks, rather than integers.)
        // 
        //   {
        //     "Rank": 2,
        //     "City": "Phoenix",
        //     "State": "Arizona",
        //     "Increase_from_2016": "34036",
        //     "population": "1626078"
        //   },
        // 
        // That is why parseInt(city.Increase_from_2016) converts strings into integers.
        //
        //      (While JavaScript is flexible enough to interpret numbers enclosed in quotation marks as 
        //      numbers, it's good practice to explicitly transform, or cast, strings into numbers.)
    
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));



// (4) Use Plotly to create a bar chart with these arrays.

// (4-1) "trace" specifies the type of graph as a bar chart as well as defines the x- and y-axis data.
var trace = {
    x: topFiveCityNamesBarChart,
    y: topFiveCityGrowths,
    type: "bar"
  };
  // (4-2) The variable [data] encloses trace in an array to meet Plotly's format requirement.
  var data = [trace];
  // (4-3) The variable [layout] is assigned to an object that specifies the chart's title and axis labels.
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  // Finally (4-4), the graph is rendered with Plotly.newPlot().
  Plotly.newPlot("bar-plot", data, layout);
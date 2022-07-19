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

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
// This file created in Module 12.4.3: Belly Button Demographics Panel
// https://courses.bootcampspot.com/courses/1225/pages/12-dot-4-3-belly-button-demographics-panel?module_item_id=499023
// 
// Overall, the code in this plots.js file is broken down into 3 parts:
//    (A) Dynamically Generate Dropdown Menu Items
//    (B) Display the argument taken when a user selects a dropdown menu item onto the browser's console
//    (C) Print information to the web page's Demographic Info panel

// ___________________________________________________________________________________________________________

// (A) Dynamically Generate Dropdown Menu Items

// (All the code to Dynamically Generate Dropdown Menu Items is inside of the init() function.)

function init() {
  // d3.select() method is used to select the dropdown menu from the index.html file
  // (which has an id of #selDataset).
  // The dropdown menu is assigned to the variable [selector].
  var selector = d3.select("#selDataset");

  // d3.json() method is used to read the data from samples.json.
  // (Data from the entire JSON file is assigned the (arbitrary) argument name [data].)
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Inside the data object, the names array--as seen from console.log(data)--contains the ID numbers of all the study participants. 
    // (The variable sampleNames is assigned to this array.)

    var sampleNames = data.names;

    // forEach() method is called on the sampleNames array.
    // (For each element in the array, a dropdown menu option is appended.)
    //  
    //    The text of each dropdown menu option is the ID. 
    //    Its value property is also assigned the ID.
    //
    //        Example: ID "940" is the first element of the sampleNames array.
    //                 As the forEach() method iterates over the first element of the array,
    //                 a menu option is appended to the dropdown menu;
    //                    the menu option is given the text that's seen in the dropdown menu ("940").
    //
    //        (The forEach() method will perform the same tasks for the continuing array elements ("941" and so on..).
    //
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init(); // Calls the init() function defined above.

    // Self-notes:
    //
    //
    // In the previous module, the dropdown menu examples we have seen had hard-coded menu options.
    //
    //  index.html code:
    //        <select id="dropdownMenu">
    //          <option value="dataset1">DataSet1</option>
    //          <option value="dataset2">DataSet2</option>
    //        </select>
    //
    // 
    // In this module with the belly button data, the dropdown menu options are generated dynamically.
    //
    //  index.html code:
    //        <select id="selDataset" onchange="optionChanged(this.value)"></select>
    //
    //  (1) The <select> tag indicates a dropdown menu. Its id is selDataset.
    //  (2) The <select> tag now has an additional attribute, called onchange, 
    //      which is associated with the optionChanged()function.
    //  (3) When a change takes place in the dropdown menu, the optionChanged() function is called.
    //  (4) The argument for the optionChanged() function is this.value.
    //  (5) Here, [this] refers to the dropdown menu. 
    //      this.value therefore returns to the value attribute of the current dropdown menu selection.
    //
    //         (The JavaScript keyword this is used to access the object in question. 
    //          In the context of an event, it refers to the HTML element that received the event. 
    //          In this case, this refers to the dropdown menu.)

// ___________________________________________________________________________________________________________

// (B) Display the argument taken when a user selects a dropdown menu item onto the browser's console

// optionChanged() function takes in an argument, named newSample, and logs it to the browser console.
//
//    (This function is declared in plots.js, but it is never called in plots.js.)
//     Unlike the init() function (which is both declared and called inplots.js.), 
//     optionChanged() is instead called by the onchange attribute of the dropdown menu in index.html.
//
// The argument name newSample refers to the value of the selected menu option.
function optionChanged(newSample) {

        // |---in index.htmnl:-----------------------------------------------------------|
        // |                                                                             |
        // | onchange=optionChanged(this.value) passes the selected menu option's value  |
        // | to the optionChanged() function in this file (plot.js)                      |
        // |                                                                             |
        // | (i.e., this.value in index.html and newSample are equivalent.)              |
        // |                                                                             |
        // |-----------------------------------------------------------------------------|

  // When an option is selected, its value is printed to the browser console.
  console.log(newSample); 

  // (This function inserted for part C: Print information to the web page's Demographic Info panel.)
  buildMetadata(newSample);

  // (This function inserted for part C: Print information to the web page's Demographic Info panel.)
  buildCharts(newSample);

}

// ___________________________________________________________________________________________________________

// (C) Print information to the web page's Demographic Info panel

// The next task is to print information to the Demographic Infopanel: 
// once a user selects an ID number, the associated volunteer's demographic information 
// needs to be filtered from samples.json and placed in the panel.
//
//    When a change takes place to the dropdown menu, 
//    two things will need to occur:
//
//      (1) The demographic information panel is populated 
//          with a specific volunteer's information.
//      (2) The volunteer's data is visualized in a separate div.
//      (These 2 tasks should be modularized i.e.,the code statements required to perform each task should be packaged as a separate function.)
//
//            These 2 functions are now placed inside the optionChanged() function.
//              (1) buildMetadata(newSample);
//              (2) buildCharts(newSample);
//
//            (Now, the optionChanged() function is called from index.html and, in turn, calls
//              buildMetadata() and buildCharts().)
//            (These two functions will use the ID number to create that specific 
//              individual's information panel and charts, respectively.)
//
//
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}
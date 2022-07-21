// Created per Module 12.3.1: Inspect an API with D3.json()

// Define the URL to SpaceX
const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json() placse a call to SpaceX's API, retrieves the data, and prints it to the browser console.
d3.json(url).then(receivedData => console.log(receivedData));

// (1) The d3.json() returns a JavaScript promise: it places an API call to the URL and executes 
//     subsequent lines of code only when the API call is complete.
// (2) Once the data is retrieved, it is assigned the arbitrary parameter name 
//     receivedData by the arrow function and printed in the console. 
// (3) The d3.json().then() method ensures that the data is received before executing the arrow function.



    // (In summary, a JavaScript promise in this case waits for the data 
    // retrieval to finish before moving on to the next code.)
    //
    // REWIND
    //
    // JavaScript is an asynchronous language, meaning that a code statement doesn't 
    // necessarily wait for the previous statement to finish executing. 
    //  
    // When a statement involves a task that can take a relatively long time to complete, 
    // such as reading large files or retrieving data from an API, 
    // the next statement of code can begin executing before the previous task finishes. 
    //    
    // Using a promise with the then() method ensures that all the data requested from the API is received before executing 
    // the next part of code.


// To confirm that the code is working:
// [On the console] we can see that an array of six objects is returned. 
// Each object contains details about a specific SpaceX launch site, 
// such as the number of space vehicles that have been successfully launched from the site.
//
// The details of each location, as you have just seen, 
// are enclosed within a JavaScript object. 
// Its properties can therefore be accessed with the dot notation. 
// The code to retrieve the full_nameof the Vandenberg Air Force Base would look like this:
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
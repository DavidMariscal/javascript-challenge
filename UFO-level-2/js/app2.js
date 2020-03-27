// from data.js
var tableData = data;

// YOUR CODE HERE!
// Function to display table data requested
  function  TableVisualization(Sightings){ 
   var tbody = d3.select("tbody")
    tbody.text("")
    Sightings.forEach(function(ufo_sighting){
    row_tr = tbody.append("tr")
    Object.entries(ufo_sighting).forEach(function([key, value]){
        row_td = row_tr.append("td").text(value)	
    })
})}

TableVisualization(tableData)

  
var submit = d3.select("#submit");

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element 
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

 
  //Creates a variable that filters the table
 var filtered = tableData.filter(sighting =>{
  return (sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 //Calls the display fuction to show the filtered table
 console.log(filtered);
 TableVisualization(filtered);
});

var Filter_Inputs = d3.selectAll('.form-control');

// Clear function
function Clear_Entries() {
    filters = {};

    // Clear the fields 
    Filter_Inputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var Clear_Button = d3.select("#clear");
// On click clears fields
Clear_Button.on('click', function () {
    d3.event.preventDefault();
    // Clears input fields
    Clear_Entries()
});
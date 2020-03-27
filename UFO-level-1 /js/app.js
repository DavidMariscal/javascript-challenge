// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
tableData.forEach(function(UFOreport) {
  //console.log(UFOreport);
  var row = tbody.append("tr");
  Object.entries(UFOreport).forEach(function([key, value]) {
      //console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value)
  })
})

// Grab reference to the button element
var button = d3.select("#filter-btn");

// Define button click
button.on("click", function() {

  d3.event.preventDefault();
  tbody.selectAll('*').remove();
  var inputDate = d3.select("#datetime");
  var inputText = inputDate.property("value")
  var filteredData = tableData.filter(x => x.datetime === inputText);

  filteredData.forEach(function(UFOreport) {
    //console.log(UFOreport);
    var row = tbody.append("tr");
    Object.entries(UFOreport).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value)
    })
  })
})
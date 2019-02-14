function modifyCSV(input) {
  var csv = d3.text(input);
  var splitCSV = csv.split(', ');
  return splitCSV;

}

function csvValues(input){
    let csv = modifyCSV(input);
    let map = d3.map();

    var count = 28;
    for(var i = 14; i < csv.length; i++){
      if(count % 28 == 0) {
      let incidentType = csv[i];

      if(map.has(incidentType)) {
        map.set(incidentType, map.get(incidentType) + 1);
      }
      else {
        map.set(incidentType, 1)
      }
    }
      count++;
  }
}

var myData = csvValues("/Users/angelobravo/Downloads/Police_Department_Incident_Reports__2018_to_Present.csv");
var incidents = myData.getKeys();

incident.entries();

var width = 500;
var height = 500;

var widthScale = d3.scale.linear()
                    .domain([0, 50])
                    .range([0,500]);

var svg = d3.select("body")
          .append("svg")
          .attr("width",width)
          .attr("height",height)

svg.selectAll("rect")
          .data(incidents)
          .enter()
          .append("rect")
          .attr("width", 50)
          .attr("height", 50)
          .attr("x", 50)
          .attr("y", 50)




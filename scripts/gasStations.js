// Description:
//   Hubot tells the price of gas for some gas stations
//
// Dependencies:
//   Request
//
// Configuration:
//   None
//
// Commands:
//   Hubot gas station <name> -  Hubot tells the gas price for the gas station you entered
//
// Author:
//   Arturo Alquicira

var request = require('request');


function gasStations(msg){
  var inputName = msg.match[1]; // grab the value
  var urlStationsList = 'http://devapi.mygasfeed.com/stations/brands/rfej9napna.json?'; // url that connects the list of gas station

// function to find the list of gas stations

  request(urlStationsList, function (error, response, body) {
  if(!error && response.statusCode <300){  // if API connects
  // Parse the json
  var jsonStations = JSON.parse(body);
  var stations = jsonStations.stations;
  var totalErrors = 0;
      // loop through the list of gas stations
      for(var i=0, arr=stations.length; i<arr; i++){
        var station_name = stations[i].name; // grab the name
        var station_id = stations[i].id; // grab the id



        // conditional to match the Gas Station Name that the user typed with the gas station list
        if(station_name.toLowerCase()===inputName.toLowerCase()){
          var urlStationDetails = "http://devapi.mygasfeed.com/stations/details/"+station_id+"/rfej9napna.json?" // if it matches then concatinate with the API url for the details of the gas station

          // function to find the details and prices of the gas station selected
          request(urlStationDetails, function (error, response, body) {
            // Parse the json
            var jsonDetails = JSON.parse(body);
            var details = jsonDetails.details;

            var regular = details.reg_price;
            var mid = details.mid_price;
            var premium = details.pre_price;


            msg.send(inputName+" prices: "+"Regular: $"+regular+", "+"Medium: $"+mid+", "+"Premium: $"+premium);
          });

        }else{
          totalErrors++;
        }


      }//for loop closing


      if(totalErrors >= stations.length){
        msg.send("No gas station found!");
      }

  }else{
    msg.send("Something wen't wrong here!")
  }
  });


};//function close

module.exports = function(robot) {
  return robot.respond(/gas station (.*)/i, function(msg) {
    gasStations(msg);
  });
}

// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      //  const planet = pickPlanet(listedPlanets)
      //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
   })


   // get the form
   // add a listener to when the form submit
  //  form.addEventListener('submit', function(event) {
      // if it's not, preventDefault
      // get the value for each of the input field
      // let pilotInput = this.document.querySelector("input[name=pilotName]");
      // const pilotValue = pilotInput.value

      // let list = document.getElementById('faultyItems');
      // formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)

      
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
           let pilotInput = this.document.querySelector("input[name=pilotName]");
           const pilotValue = pilotInput.value;
           let copilotInput = this.document.querySelector("input[name=copilotName]");
           const copilotValue = copilotInput.value;
           let fuelLevelInput = this.document.querySelectory("input[name=fuelLevel]");
           const fuelLevelValue = fuelLevelInput.value;
           let cargoLevelInput = this.document.querySelectory("input[name=cargoLevel]");
           const cargoLevelValue = cargoLevelInput.value;
           
           let list = document.getElementById('faultyItems');
           formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);

        
            
        });  


});
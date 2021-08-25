// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  // get the missionTarget div
  // set the inner HTML to this
  // fill in the information that is passed in
   // Here is the HTML formatting for our mission target div.
   /*
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                `
   */

  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">
  `;

}

function validateInput(testInput) {
  //check if the test Input is empty
    // if it is, return 'Empty'
    if (testInput === "") {
      return "Empty";
   // check if it's not a number isNaN
    // return 'Not a Number'
    } else if (isNaN(testInput) === true) {
      return "Not a Number";
  // else
    // return 'Is a Number'
    } else {
      return "Is a Number";
    }
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
  // check if any of the values are empty
    // if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty')
    // alert user that they need to fill out all the fields alert('message')
    if (validateInput(pilotValue) === "Empty" || validateInput(copilotValue) === "Empty" || validateInput(fuelLevelValue) == "Empty" || validateInput(cargoLevelValue) == "Empty") {
      alert("All fields are required!");
    }
  // check if fuelLevelValue and cargoLevelValue are not numbers
    // alert the user that must enter valid input
    if (validateInput(fuelLevelValue) === "Not a Number" || validateInput(cargoLevelValue) === "Not a Number") {
      alert("You must enter a number for Fuel Level and Cargo Level inputs.");
    }

  // set the list.style.visibility = 'visible'
  list.style.visibility = 'visible';

  // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
  const pilotStatus = document.getElementById("pilotStatus");
  pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;

  // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
  const copilotStatus = document.getElementById("copilotStatus");
  copilotStatus.innerHTML = `Copilot ${copilotValue} is ready for launch`;

  // check if the fuel level is less 10,000
  if(fuelLevelValue <= 10000) {
    // change launchStatus to "Shuttle not ready for launch", and color to red
    const launchStatus = document.getElementById("launchStatus");
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    // change the fuelStatus to "Fuel level too low for launch"
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
  }
  // check if the cargo level is more than 10,000
  if(cargoLevelValue > 10000) {
    // change launchStatus to "Shuttle not ready for launch", and color to red
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    // change the cargoStatus to "Cargo level too high for launch"
    document.getElementById("cargoStatus").innerHTML = "Cargo level too high for launch";
  }
    // if both fuel and cargo are good
  if (fuelLevelValue > 10000 && cargoLevelValue < 10000) {
    // change the launchStatus to "Shuttle is Ready for Launch" and color to green
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is ready for launch";
  }
  
  
}

async function myFetch() {
    let planetsReturned;

  planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      // get the json from the response
      return response.json();
  });

    return planetsReturned;
}

function pickPlanet(planets) {
  // randomly pick a planet from the array
  // Math random for index
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

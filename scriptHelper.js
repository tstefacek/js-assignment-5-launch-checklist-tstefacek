// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget')
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
                `
   
}

function validateInput(testInput) {
  if (testInput === "" || testInput === null){
    return "Empty"
  }
  else if(!isNaN(Number(testInput))){
    return "Is a Number"
  }
  else {
    return "Not a Number"
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let launchStatus = document.getElementById('launchStatus');

   //checks if there's any input
   if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty'
   || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty'){
    alert('All fields required!')
   }
   //checks that pilot/copilot are strings
   else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
    alert('Pilot and Co-Pilot names cannot be numbers.')
   }
   //checks that cargo/fuel levels are numbers
   else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
    alert('Cargo and Fuel level must be numerical values.')
   }
   else{
    //after all checks passed, update HTML 
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`
    list.style.visibility = 'hidden'
   }

   //update faultyItems list HTML
   if (fuelLevel < 10000){
    fuelStatus.innerHTML = `Not enough fuel for flight`
    launchStatus.innerHTML = `Shuttle not ready for launch`
    launchStatus.style.color = `red`
    list.style.visibility = `visible` 
    }
    else if (cargoLevel > 10000){
     cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`
     launchStatus.innerHTML = `Shuttle not ready for launch`
     launchStatus.style.color = `red`
     list.style.visibility = `visible`
    }
    else if (cargoLevel < 10000 & fuelLevel > 10000){
     launchStatus.innerHTML = `Shuttle ready for launch`
     launchStatus.style.color = `green`
     list.style.visibility = `visible` 
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random() * planets.length)
    return planets[index]
}
//ask about modules during demo
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

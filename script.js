window.addEventListener("load", function() {
    //event listener to handle form submission
    const form = document.getElementById('testForm')
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.getElementById('pilotName').value
        let copilot = document.getElementById('copilotName').value
        let fuelLevel = document.getElementById('fuelLevel').value
        let cargoLevel = document.getElementById('cargoMass').value
        let list = document.getElementById('faultyItems')
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
})
   
       let listedPlanets;
       // Set listedPlanetsResponse equal to the value returned by calling myFetch()
       let listedPlanetsResponse = myFetch();
       listedPlanetsResponse.then(function (result) {
           listedPlanets = result;
           console.log(listedPlanets);
       }).then(function () {
           console.log(listedPlanets);
           // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
           let planet = pickPlanet(listedPlanets);
           let name = planet.name;
           let diameter = planet.diameter;
           let star = planet.star;
           let distance = planet.distance;
           let imageUrl = planet.image;
           let moons = planet.moons;
           addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        })
   
   });
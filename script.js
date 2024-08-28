
// Write your JavaScript code here!
    window.addEventListener("load", function() {
        

        formSubmission(document, 'input[name=pilotName]', 'input[name=copilotName]', 'input[name=fuelLevel]', 'input[name=cargoMass]');
        
        

    let listedPlanets; 
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   planet = pickPlanet(listedPlanets);
   console.log(planet)
   addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.image, planet.moons)
    })
})

    
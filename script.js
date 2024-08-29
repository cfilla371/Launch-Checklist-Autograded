


    window.addEventListener("load", function() {
        let listedPlanets; 
        let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
            }).then(function () {        
   planet = pickPlanet(listedPlanets);
   addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

    let list = document.getElementById('faultyItems')
    let form = document.querySelector('form')

    form.addEventListener('submit', function(event){
        event.preventDefault()
        let pilotInput = document.querySelector('input[name=pilotName]')
        let pilot = pilotInput.value
        let copilotInput = document.querySelector('input[name=copilotName]')
        let copilot = copilotInput.value
        let fuelInput = document.querySelector('input[name=fuelLevel]')
        let fuelLevel = fuelInput.value
        let cargoInput = document.querySelector('input[name=cargoMass]')
        let cargoMass = cargoInput.value

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass)
    })

})

    
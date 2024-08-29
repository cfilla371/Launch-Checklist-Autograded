// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
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
    if(testInput === ""){ return 'Empty'}
    if(isNaN(testInput)){return 'Not a Number'}
        return 'Is a Number'
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    

    if (
        validateInput(pilot) === 'Empty' ||
        validateInput(copilot) === 'Empty' ||
        validateInput(fuelLevel) === 'Empty' ||
        validateInput(cargoLevel) === 'Empty'
    ) {
        alert('fill out all forms')
    }


    if (validateInput(pilot) === 'Is a Number') {
        document.getElementById('pilotStatus').innerHTML = 'pilot name cannt be a number'
        document.getElementById('faultyItems').style = 'visibility: visible'
        document.getElementById('launchStatus').style.color = 'red'
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch'
        }
    if (validateInput(pilot) === 'Not a Number') {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`
        document.getElementById('faultyItems').style = 'visibility: visible'
        }

    if (validateInput(copilot) === 'Is a Number') {
        document.getElementById('copilotStatus').innerHTML = 'Copilot name cannt be a number'
        document.getElementById('faultyItems').style = 'visibility: visible'
        document.getElementById('launchStatus').style.color = 'red'
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch'
      
            }
    if (validateInput(copilot) === 'Not a Number') {
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`
        document.getElementById('faultyItems').style = 'visibility: visible'
            }  
        
    if (fuelLevel < 10000) {
        document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch'
        document.getElementById('faultyItems').style = 'visibility: visible'
        document.getElementById('launchStatus').style.color = 'red'
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch'
    }
    if (fuelLevel > 9999){
        document.getElementById('faultyItems').style = 'visibility: visible'
        document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch'
    }

    if (cargoLevel > 10000) {
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass too heavy for launch'
        document.getElementById('faultyItems').style = 'visibility: visible'
        document.getElementById('launchStatus').style.color = 'red'
        document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch'
    }
    if (cargoLevel < 10000){
        document.getElementById('faultyItems').style = 'visibility: visible'
        document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch'
    }

    if(validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number' && fuelLevel > 9999 && cargoLevel < 10000) {
        document.getElementById('launchStatus').innerHTML = 'Shuttle is Ready for Launch'
        document.getElementById('launchStatus').style.color = 'green'
    }

    // if(fuelLevel > 10000 && cargoLevel < 10000 && validateInput(pilot) === 'Not a Number' && validateInput(copilot) === 'Not a Number') {
    //     document.getElementById('faultyItems').style = 'visibility: visible'
    //     document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch'
    //     document.getElementById('launchStatus').style.color = 'green'
    //     document.getElementById('launchStatus').innerHTML = 'Shuttle is Ready for Launch'
    // }


 }

    
        
    



 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
            return response.json()
         });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let pick = Math.round((Math.random()*10)/2)
    let planet = planets[pick]
        return planet
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
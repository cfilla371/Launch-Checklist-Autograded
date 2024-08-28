// Write your helper functions here!

require('cross-fetch/polyfill');


function notReady(info) {
    document.getElementById('launchStatus').innerHTML = 'Not ready for Launch'
    document.getElementById('launchStatus').style.color = 'red'
    document.getElementById('faultyItems').style = 'visibility: visible'
    document.getElementById(info).style.color = 'red'
                    
}

function addDestinationInfo(document, name, diameter, star, distance, imageUrl, moons) {
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let li4 = document.createElement('li')
    let li5 = document.createElement('li')
    let img = document.createElement('img')
    
    document.getElementById('missionTarget').appendChild(li1)
    document.getElementById('missionTarget').appendChild(li2)
    document.getElementById('missionTarget').appendChild(li3)
    document.getElementById('missionTarget').appendChild(li4)
    document.getElementById('missionTarget').appendChild(li5)
    document.getElementById('missionTarget').appendChild(img)
    li1.innerHTML = `${name}`
    li2.innerHTML = `${diameter}`
    li3.innerHTML = `${star}`
    li4.innerHTML = `${distance}`
    li5.innerHTML = `${moons}`
    img.src = imageUrl

}
 
 function validateInput(testInput) {
    let input = document.querySelector(testInput)
    if(input.value === ""){ return 'Empty'}
    if(isNaN(input.value)){return 'Not a Number'}
    return 'Is a Number'
 }
//forgot to enable workflows
 function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    
    let form = document.querySelector('form')
    form.addEventListener('submit', function(event){
        if( validateInput(pilot) !== 'Not a Number' ||
            validateInput(copilot) !== 'Not a Number' || 
            validateInput(fuelLevel) !== 'Is a Number' ||
            validateInput(cargoLevel) !== 'Is a Number') 
                {alert('Fill out forms correctly')}
        
    alert(`${document.getElementById('pilotStatus').innerHTML = 'Pilot ' + document.querySelector(pilot).value} is ready
        ${document.getElementById('copilotStatus').innerHTML = 'Co-Pilot ' + document.querySelector(copilot).value} is ready`)
                
    fLevel = document.querySelector(fuelLevel).value
    cLevel = document.querySelector(cargoLevel).value
                
    if (fLevel < 10000) {
        notReady('fuelStatus')
        document.getElementById('fuelStatus').innerHTML = `${fLevel}(kg) is not enough fuel`
    };
    if (cLevel > 10000) {
        notReady('cargoStatus')
        document.getElementById('cargoStatus').innerHTML = `${cLevel}(kg) is too heavy`
    };
    if  (fLevel > 10000 && cLevel < 10000) {
        document.getElementById('launchStatus').innerHTML = 'READY FOR LAUNCH'
        document.getElementById('launchStatus').style.color = 'green'
        document.getElementById('faultyItems').style = 'visibility: hidden'    
        }
    

    event.preventDefault();
            
        })

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
    console.log(pick)
    let planet = planets[pick]
    return planet
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
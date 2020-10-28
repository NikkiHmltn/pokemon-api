fetch('https://api.spacexdata.com/v3/missions')
.then(reponse =>{
    return reponse.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/payloads/SES-8')
.then(reponse =>{
    return reponse.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/ships/AMERICANSPIRIT')
.then(reponse =>{
    return reponse.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
})

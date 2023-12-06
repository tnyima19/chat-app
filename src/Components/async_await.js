function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log(`Making Request to ${location}`)
        if (location === 'Google'){
            resolve('Google says hi');
        }else{
            reject('We can only talk to google');
        }
    })
}


function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log('Processing response');
        resolve(`Extra Information + ${response}`);
    })
}

makeRequest('Google').then((message) => {
    console.log('Response REceived');
    return processRequest(message);
}).then((processResponse) => {
    console.log(processResponse);
})
let apicall=new Promise(function(resolve,reject){
resolve({status: 200, body:"User Data"});
});

apicall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
})


// .then() runs ONLY when the promise resolves successfully.
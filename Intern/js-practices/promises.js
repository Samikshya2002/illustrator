function fakeFetch(url){
    return new Promise((resolve, reject)=>{
        if(url==='google.com'){
            resolve('Fetched data from google.com');
        }
        else{
            reject('Invalid Url');
        }
    })
}

function getData(url){
    fakeFetch(url)
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}

getData("google.com");
getData("ola.com");

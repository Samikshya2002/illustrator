const getData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const random= Math.random();
            if(random>0.5){
                resolve(`Success! random number:${random}`)
            }
            else{
                reject(`Error occured!random number:${random}"`)
            }
        },1500)
    })
}

const fetchData=async()=>{
    try{
        const data = await getData();
        console.log(data);
    }
    catch(error){console.log(error);}
}

fetchData();
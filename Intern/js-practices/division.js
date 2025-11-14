const getData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const random= Math.random();
            if(random>0.5){
                resolve("Data received")
            }
            else{
                reject("Network error")
            }
        },1500)
    })
}

const fetchData = async()=>{
    for(let attempt=1;attempt<=3;attempt++){
        try{
            console.log(` Attempt ${attempt}`)
            const data = await getData();
            console.log("success",data);
        }catch(error){
            console.log(` Attempt ${attempt} failed:${error}`)
            if(attempt===3){
                console.log("failed after 3 attempts");
            }
        }
    }
}

fetchData();
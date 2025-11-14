const getRandomNumber =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const num =Math.floor(Math.random()*10)+1;
            if(num>5){
            resolve(`Success!Number was ${num}`);
        }
        else{
            reject(`Failed!Number was ${num}`);
        }
        },1000);
    })
}

const checkNumber=()=>{
    getRandomNumber()
    .then((msg)=>console.log(msg))
    .catch((error)=>console.log(error));
}

checkNumber();
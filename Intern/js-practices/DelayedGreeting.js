function delayedGreeting(name,delay){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(`Hello,${name}`);
        },delay);
    })
}

function sayHello(){
    delayedGreeting("Sam",2000)
    .then((message)=>console.log(message))
    .catch((error)=>console.log(error));
}

sayHello();
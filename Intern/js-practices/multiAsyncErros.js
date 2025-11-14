const fetchUser = async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("User fetched");
        },2000)
    })
}

const fetchOrder = async()=>{
    return new Promise((resolve,reject)=>{
        const num = Math.random();
        if(num>0.5){
            resolve("Order fetched");
        }else{
            reject("failed");
        }
    })
}

const fetchPayment = async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Payment fetched");
        },1000)
    })
}

const process = async()=>{
    try{
        const user = await fetchUser();
        console.log(user);

        const order = await fetchOrder();
        console.log(order);

        const payment = await fetchPayment();
        console.log(payment)

        console.log("Completed")
    }
    catch(error){
        console.log("Error:",error)
        console.log("Process aborted")
    }
}

process();
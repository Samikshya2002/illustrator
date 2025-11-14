const placeOrder = (item)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              const random= Math.random()>0.3;
            if(random){
                resolve(`  ${item} is available`);
            }
            else{reject(` ${item} not available`);}
        },1000);
    })
}

const processPayment = (order)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             const random= Math.random();
            if(random<0.3){
                reject(`Payment failed : ${order}`);
            }
            else{resolve(`Success : ${order}`);}
        },1000);
    })
}

const deliverOrder = (order)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(` ${order} delivered`);
        },1500);
        
    })
}

const process = async()=>{
    try{
        const order = await placeOrder("Pizza");
        console.log(order);

        const payment = await processPayment(order);
        console.log(payment);

        const deliver = await deliverOrder(order);
        console.log(deliver);

        console.log("success!!")
    }
    catch(error){
        console.log("Error:",error);
        console.log("failed");
    }
    
}

process();
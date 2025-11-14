const delay = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

const sayHello=async()=>{
    await delay(1000);
    console.log("Step 1 complete");
    await delay(2000);
    console.log("Step 2 complete");
    await delay(1000);
    console.log("All steps done");
}

sayHello();
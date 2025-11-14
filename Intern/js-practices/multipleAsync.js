const task1 = async()=>{
    return "Task1 done";
}
const task2 = async()=>{
    return "Task2 done";
}
const task3 = async()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve ("Task3 done");
    },2000)
    })   
}

const runtask = async()=>{
    const[t1,t2,t3]=await Promise.all([task1(),task2(),task3()]);
    console.log(t1,t2,t3);
}

runtask();
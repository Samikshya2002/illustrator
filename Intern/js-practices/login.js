const loginUser=(username,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username==="admin" && password==="1234"){
                resolve("Welcome, admin!");
            }
            else{
                reject("Invalid credentials");
            }
        },1500);
    })
}

const authenticate =(username,password)=>{
    loginUser(username,password)
    .then((msg)=>console.log(msg))
    .catch((error)=>console.log(error));
}

authenticate("admin","1234");
authenticate("guest","1234");

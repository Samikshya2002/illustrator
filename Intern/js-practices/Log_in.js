const loginUser=(username,password)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username==="user" && password==="123"){
                resolve("Welcome, user!");
            }
            else{
                reject("Invalid credentials");
            }
        },2000);
    })
}

const authenticate = async()=>{
    try{
        const result = await loginUser("user", "123")
        console.log(result);
    }catch(error){console.log(error);}
}

authenticate();
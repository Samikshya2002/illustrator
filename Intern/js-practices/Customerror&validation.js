class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="ValidationError";
    }
}
class AuthError extends Error{
    constructor(message){
        super(message);
        this.name="AuthError";
    }
}

const login= async(username,password)=>{
    if(!username || !password){
        throw new ValidationError("Username and password cannot be empty");
    }
    await new Promise(res=>setTimeout(res,1000))
    if(username==="user" && password==="123"){
        return("Login successful");
    }
    else{
        throw new AuthError("Username and password incorrect");
    }
}

const fetchProfile = async(username)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Profile of ${username}`);
        },1500)
    })
}

const run = async(username,password)=>{
    try{
        const result = await login(username,password);
        console.log(result);

        const profile = await fetchProfile(username);
        console.log(profile);

        console.log("Logedin successfully")
    }
    catch(error){
        if(error instanceof ValidationError){
            console.log("Validation error:",error.message);
        }else if(error instanceof AuthError){
            console.log("Authentication error:",error.message);
        }else{error;}
    }
}

run("user","123");
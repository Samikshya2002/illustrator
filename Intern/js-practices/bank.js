class ValidationError extends Error{//inheritance
    constructor(message){
        super(message);
        this.name = "ValidationError"
    }
}
class InsufficientFundError extends Error{
    constructor(message){
        super(message);
        this.name = "InsufficientFundError"
    }
}

const validateAccount=async(accountNumber)=>{
    if(!accountNumber || accountNumber.toString().length !==6){
        throw new ValidationError("Account number must be 6 digit long")
    }
    return `Account ${accountNumber} is valid`;
}

const checkBalance = async(accountNumber)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const balance = Math.floor(Math.random()*2000);
            resolve(balance);
        },1000)
    })
}

const withdrawMoney=async(accountNumber,amount)=>{
    const balance = await checkBalance(accountNumber);
    console.log(`Current balance: ${balance}`)


    if(amount>balance){
        throw new InsufficientFundError("Insufficient fund");
    }
    return `withdrawal of ${amount} successful`;
}

const run=async(accountNumber,amount)=>{
    try{
        const number = await validateAccount(accountNumber);
        console.log(number);

        const result = await withdrawMoney(accountNumber,amount);
        console.log(result);

    }
    catch(error){
        if(error instanceof ValidationError){
            console.log("Validation error:",error.message);
        }else if(error instanceof InsufficientFundError){
            console.log("Insufficient fund:",error.message);
        }else{
            error;
        }
    }
}

run(123456,1000);
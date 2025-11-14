const mockFetch=(url)=>{
    return new Promise((resolve,reject)=>{
        if(url==="site.com"){
            setTimeout(()=>{
                resolve({status:200, data:"OK"});
            },1000);
        }
        else{
            reject(new Error("404 Not Found"));
        }
    })
}

const loadSite=(url)=>{
    mockFetch(url)
    .then((res)=>{console.log("Success",res)})
    .catch((error)=>{console.log(error)});
}

loadSite("site.com");
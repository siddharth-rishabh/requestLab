const url = document.querySelector(".url");
const btn = document.querySelector(".send");
const method = document.querySelector(".method");
const responseBox = document.querySelector(".response");
const resStatus = document.querySelector(".status");
const headerKey = document.querySelector(".key");
const headerValue = document.querySelector(".value");
const reqBody = document.querySelector(".body");


function getHeaders(){
    const headers = {};
    if(headerKey.value.trim() && headerValue.value.trim()){
        headers[headerKey.value.trim()] = headerValue.value.trim();
    }
    return headers;
}

console.log(getHeaders());


btn.addEventListener("click", async function(e){
    e.preventDefault();
    if(url.value.trim()!==""){
        console.log("URL: "+ url.value);
        console.log("Method: "+ method.value);
        console.log("Body: "+ reqBody.value);
        
    
        try{
            const response = await fetch(url.value,{
                method: method.value,
                headers: getHeaders(),
            });
        if(!response.ok){
        throw new Error("HTTP Error: " +response.status);
        }
    console.log(response.status);
    
    const data = await response.json();
    console.log(data);

    resStatus.textContent = response.status;
    responseBox.innerHTML= JSON.stringify(data, null, 2);
        }catch(err){
            console.log("request failed: " +err.message);
            resStatus.textContent = "Error";
            responseBox.textContent = err.message;
        }
    }else{
        console.log("Invalid input!!");
    }
})
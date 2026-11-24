const url = document.querySelector(".url");
const btn = document.querySelector(".send");
const method = document.querySelector(".method");

btn.addEventListener("click", async function(e){
    e.preventDefault();
    if(url.value.trim()!==""){
        console.log("URL: "+ url.value);
        console.log("Method: "+ method.value);

        try{
            const response = await fetch(url.value);
        if(!response.ok){
        throw new Error("HTTP Error: " +response.status);
        }
    console.log(response.status);
    
    const data = await response.json();
    console.log(data);
        }catch(err){
            console.log("request failed: " +err.message);
        }

    }else{
        console.log("Invalid input!!");
    }
})
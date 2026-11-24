const sendButton = document.querySelector(".send");
const url = document.querySelector(".url");
const btn = document.querySelector(".send");
const method = document.querySelector(".method");

btn.addEventListener("click", function(e){
    e.preventDefault();
    if(url.value.trim()!==""){
        console.log("URL: "+ url.value);
        console.log("Method: "+ method.value);
    }else{
        console.log("Invalid input!!");
    }
})
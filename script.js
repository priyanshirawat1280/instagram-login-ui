
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
let loginButton = document.getElementById("login-btn");
let ShowButton = document.getElementById("show-btn");
let ForgetButton = document.getElementById("Forget-password");

loginButton.addEventListener("click" , function(event){
    event.preventDefault();
    if(email.value === "" || password.value === ""){
        message.innerText = "Please fill all fiels";
        message.style.color = "red";
    }else if(!email.value.includes("@")
    ){
        message.innerText = "Please enter a valid email";
        message.style.color = "red";

    }else if(password.value.length <6)
    {
        message.innerText = "Password at least must be 6 character";
        message.style.color  = "red";
    }
    else{
            message.innerText = "login successfully"
            message.style.color = "green";
            loginButton.innerText = "Logging in ..."
            loginButton.disabled = true;
            setTimeout(function(){

            message.innerText = "Welcome Priyanshi ❤️";

    setTimeout(function(){
        message.innerText = "";
    },2000);

},2000);
email.value = "";
password.value = "";
        }
    
});

ShowButton.addEventListener("click" , function(event){
    event.preventDefault();
    if(password.type === "password"){
        password.type = "text";
        
    }
    else{
        password.type = "password";
    }

});

ForgetButton.addEventListener("click" , function(event){
    event.preventDefault();
    message.innerText = "Password reset link sent to your email.";
    message.style.color = "blue";
})

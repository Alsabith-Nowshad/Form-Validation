let num  = document.getElementById("number")
let email  = document.getElementById("email")
let pass  = document.getElementById("pass")
let submit  = document.getElementById("submit")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let pass2 = document.querySelector(".pass2")
let h3 = document.querySelector("h3")
let h4 = document.querySelector("h4")



// number validation

submit.addEventListener("click", function(){
    if(num.value == ""){
        h1.textContent = "Add number"
    }else if(num.value.length == 10){
        h1.textContent = "Valid Number"
    }else{
        h1.textContent = "Invalid Number"
    }
})

// email validation

submit.addEventListener("click", function(){
    if(email.value.includes("@" && ".com")){
        h2.textContent = "Valid Email"
    }else{
        h2.textContent = "Invalid Email"
    }
})

// password validation

submit.addEventListener("click", function(){
    if(pass.value.includes("+" || "-" || "$")){
        h3.textContent = "Symbols are not allowed"
    }else if(
        pass.value.length < 12
    ){
        h3.textContent = "Password contain 12 characters"
    }else(
        h3.textContent = "Valid Password"
    )
})


submit.addEventListener("click", function(){
    if(pass.value == pass2.value){
       h4.textContent = "Correct Password"
    }  else{
       h4.textContent = "Does not match"
    }
   })
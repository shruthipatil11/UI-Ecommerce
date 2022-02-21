const signUpBtn = document.getElementById("sign-up-btn");
const signInBtn = document.getElementById("sign-in-btn");
const signUpForm = document.getElementById("sign-up");
const signInForm = document.getElementById("sign-in");


signUpBtn.addEventListener("click", ()=>{
    signUpForm.classList.remove("display-none");
    signInForm.classList.add("display-none");
    signUpBtn.classList.add("display-none");
    signInBtn.classList.remove("display-none");
})

signInBtn.addEventListener("click", ()=>{
    signUpBtn.classList.remove("display-none");
    signInBtn.classList.add("display-none");
    signUpForm.classList.add("display-none");
    signInForm.classList.remove("display-none");
    
})
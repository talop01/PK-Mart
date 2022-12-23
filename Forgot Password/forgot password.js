

//----------------------------- Form validation
const email = document.querySelector("#email")
const form = document.querySelector("form")

const showError = (input,message) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");

    error.innerText = message;
    input.style.borderColor = "Red";
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");

    error.innerText = "";
    input.style.borderColor = "#888888";
}

// Utility functions
const isRequired = (value) => value === "" ? true : false;
const isBetween = (length,min,max) => length < min || length > max ? true : false;

// Email validation
const isEmailValid = (email) => {
    const re = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return re.test(email)
}

const checkEmail = () => {
    let valid = false
    const Text = email.value.trim();
    if (isRequired(Text)){
        showError(email,"Email cannot be blank.")
    }
    else if (!isEmailValid(Text)){
        showError(email,"Email is not valid.")
    }
    else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

form.addEventListener("submit",function (e) {
    e.preventDefault();
    console.log(1)
   let valid = checkEmail() 

    if(valid){
        resetForm()
        window.location.assign("rewritepassword.html")
    }
});

function resetForm(){
    email.value = "" 
}
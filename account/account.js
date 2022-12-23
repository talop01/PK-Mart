const fname = document.querySelector("#fname") 
const lname = document.querySelector("#lname")
const email = document.querySelector("#email")

const currentPasswd = document.querySelector("#currentPasswd") 
const newPasswd = document.querySelector("#newPasswd")
const confirmPasswd = document.querySelector("#confirmPasswd")

const leftForm = document.querySelector(".left-form");
const rightForm = document.querySelector(".right-form");

// Message
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

// employee name validation
const checkUsername = (element) => {
    let valid = false;
    const min = 3, max = 25;
    const username = element.value.trim();
    const regExp = /[a-zA-Z]+$/g

    if (isRequired(username)){
        showError(element,"Name cannot be blank.");
    }
    else if(isBetween(username.length,min,max)){
        showError(element,`Name must be between ${min} and ${max} characters.`)
    }
    else if(!(regExp.test(username))){
        showError(element,"Name cannot include special character and number.")
    }
    else{
        showSuccess(element);
        valid = true
    }
    return valid;
};

// Email validation
const isEmailValid = (email) => {
    const re = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return re.test(email)
}

const checkEmail = () => {
    let valid = false
    const Text = email.value.trim();
    if (isRequired(Text)){
        console.log(1)
        showError(email,"Email cannot be blank.")
    }
    else if (!isEmailValid(Text)){
        console.log(2)
        showError(email,"Email is not valid.")
    }
    else {
        console.log(3)
        showSuccess(email);
        valid = true;
    }
    return valid;
}


// Password validation
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
}

const NewPassword = () => {
    let valid = false;
    const password = newPasswd.value.trim();

    if (isRequired(password)){
        showError(newPasswd,"Password cannot be blank.")
    }
    else if (!isPasswordSecure(password)){
        showError(newPasswd,`Password must has at least 8 characters that include at
        least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character`)
    }
    else{
        showSuccess(newPasswd)
        valid = true;
    }
    return valid;
};

// ConfirmPassword Validation
const checkConfirmPassword = () => {

    let valid = false;
    const confirmPassword = confirmPasswd.value.trim();
    const password = newPasswd.value.trim();

    if (isRequired(confirmPassword)){
        showError(confirmPasswd,"Please enter the password again.")
    }   
    else if (password !== confirmPassword){
        showError(confirmPasswd,"The password does not match.");
    }
    else {
        showSuccess(confirmPasswd)
        valid = true;
    }
    return valid;
}

const currentPassword = () => {
    let valid = false;
    const password = currentPasswd.value.trim();

    if (isRequired(password)){
        showError(currentPasswd,"Password cannot be blank.")
    }
    else if (!isPasswordSecure(password)){
        showError(currentPasswd,`The current Password contains at least 8 characters that include at
        least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character`)
    }
    else{
        showSuccess(currentPasswd)
        valid = true;
    }
    return valid;
};

leftForm.addEventListener("submit",function (e) {
    e.preventDefault();

    let check1 = checkUsername(fname)
    let check2 = checkUsername(lname)
    let check3 = checkEmail()

    let isFormValid = check1 && check2 && check3;

    if(isFormValid){
        resetForm()
    }
});

rightForm.addEventListener("submit",function (e) {
    e.preventDefault();

    let check1 = NewPassword()
    let check2 = checkConfirmPassword()
    let check3 = currentPassword()

    let isFormValid = check1 && check2 && check3;

    if(isFormValid){
        resetForm()
    }
});


function resetForm(){
    fname.value = "" 
    lname.value = "" 
    email.value = "" 

    currentPasswd.value = ""
    confirmPasswd.value = ""
    newPasswd.value = "" 
}
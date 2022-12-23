// const pword = document.querySelector('#Password');
// const password = document.querySelector('#passBox');
// pword.addEventListener('click', function (e) {
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     this.classList.toggle('fa-eye-slash');
// });

// Form validation
const email = document.querySelector("#email")
const password = document.querySelector('#password');
const form = document.querySelector("form");


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
const isPasswordSecure = (value) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(value);
}

const CheckPassword = () => {
    let valid = false;
    const text = password.value.trim();

    if (isRequired(text)){
        showError(password,"Password cannot be blank.")
    }
    else if (!isPasswordSecure(text)){
        showError(password,`Invalid pasword`)
    }
    else{
        showSuccess(password)
        valid = true;
    }
    return valid;
};

form.addEventListener("submit",function (e) {
    e.preventDefault();

    let check1 = CheckPassword()
    let check2 = checkEmail()
    let isFormValid = check1 && check2;

    if(isFormValid){
        resetForm()
        window.location.assign("home/home.html")
    }
});

function resetForm(){
    password.value = "" 
    email.value = "" 
}
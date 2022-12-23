// const newPassword = document.querySelector('#new-Password');
// const newpassword = document.querySelector('#passwordBox2');

// newPassword.addEventListener('click', function (e) {
//     const type = newpassword.getAttribute('type') === 'password' ? 'text' : 'password';
//     newpassword.setAttribute('type', type);
//     this.classList.toggle('fa-eye-slash');
// });

// const confirmNewPassword = document.querySelector('#confirm-new-Password');
// const confirmNewpassword = document.querySelector('#passwordBox3');

// confirmNewPassword.addEventListener('click', function (e) {
//     const type = confirmNewpassword.getAttribute('type') === 'password' ? 'text' : 'password';
//     confirmNewpassword.setAttribute('type', type);
//     this.classList.toggle('fa-eye-slash');
// });

// Form Validation
const newPasswd = document.querySelector("#newPassword")
const confirmPasswd = document.querySelector("#confirmPassword")

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

const isRequired = (value) => value === "" ? true : false;

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


form.addEventListener("submit",function (e) {
    e.preventDefault();

    let check1 = NewPassword()
    let check2 = checkConfirmPassword()

    let isFormValid = check1 && check2;

    if(isFormValid){
        resetForm()
        window.location.assign("../index.html")
    }
});


function resetForm(){
    confirmPasswd.value = ""
    newPasswd.value = "" 
}
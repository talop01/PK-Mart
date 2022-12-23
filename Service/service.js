// Form validation
const Name = document.querySelector("#name")
const eid = document.querySelector("#eid");
const reason = document.querySelector("#reason")
const reason2 = document.querySelector("#reason2")
const from = document.querySelector("#from")
const to = document.querySelector("#to")
const leaveForm = document.querySelector(".leave")
const feedbackForm = document.querySelector(".feedback")

console.log(to.value)

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
const isBetween = (length,min,max) => length < min || length > max ? true : false;

const checkName = () => {
    let valid = false;
    const min = 3, max = 25;
    const username = Name.value.trim();
    const regExp = /[a-zA-Z]+$/g

    if (isRequired(username)){
        showError(Name,"Name cannot be blank.");
    }
    else if(isBetween(username.length,min,max)){
        showError(Name,`Name must be between ${min} and ${max} characters.`)
    }
    else if(!(regExp.test(username))){
        showError(Name,"Name cannot include special character and number.")
    }
    else{
        showSuccess(Name);
        valid = true
    }
    return valid;
};

// employee ID
function checkEid(){
    var validity = false
    var text = eid.value.trim()
    var regExp = /PK[0-9]+/g 

    if (text === ""){
        validity = false
        showError(eid,"EID cannot be empty")
    }
    else if(!(regExp.test(text)))
    {
        validity = false
        showError(eid,"EID should be in this format PK123")
    }
    else if(!(text.length === 5)){
        validity = false
        showError(eid,"EID should be 5 characters.")
    }
    else{
        validity = true
        showSuccess(eid);
    }
    return validity
}

// Reason
function checkReason(element){
    var validity = false
    var text = element.value.trim()

    if (text === ""){
        validity = false
        showError(element,"State your reason.")
    }
    else if(text.length < 40){
        validity = false
        showError(element,"The reason should be more than 40 words")
    }
    else{
        validity = true
        showSuccess(element);
    }
    return validity
}

// Date
function checkDate(element){
    var validity = false
    var text = element.value

    if (text === ""){
        validity = false
        showError(element,"Select a date")
    }
    else{
        validity = true
        showSuccess(element);
    }
    return validity
}

leaveForm.addEventListener("submit",function (e) {
    e.preventDefault();

    let check1 = checkName()
    let check2 = checkEid()
    let check3 = checkReason(reason)
    let check4 = checkDate(from)
    let check5 = checkDate(to)
    let isFormValid = check1 && check2 && check3 && check4 && check5;

    if(isFormValid){
        insertNewRecord()
    }
});

feedbackForm.addEventListener("submit",function (e) {
    e.preventDefault();
    let isFormValid = checkReason(reason2);

    if(isFormValid){
        resetForm()
        // window.location.assign("../index.html")
    }
});

function resetForm(){
    Name.value = ""
    eid.value = ""
    reason.value = "" 
    reason2.value = ""
    from.value = "" 
    to.value = ""
}

// Table update
// CRUD : Create
function insertNewRecord(){
    var table = document.querySelector(".leave-table").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = eid.value;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = Name.value;
    cell5 = newRow.insertCell(2);
    cell5.innerHTML = "Processing";

    resetForm()
}

function resetForm(){
    eid.value = "";
   empName.value = "";
    rAmount.value = "";
    bAccount.value = "";
    reason.value = "";
    checkBox.checked = false;
}
// Selects the elements in html
const eid = document.querySelector("#eid");
const empName = document.querySelector("#name");
const rAmount = document.querySelector("#request-amount");
const  bAccount = document.querySelector("#bank-account");
const reason = document.querySelector("#reason") 
const checkBox = document.querySelector("#checkBox")
const form = document.querySelector(".advance-form");

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
const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    const username = empName.value.trim();
    const regExp = /[a-zA-Z]+$/g

    if (isRequired(username)){
        showError(empName,"Name cannot be blank.");
    }
    else if(isBetween(username.length,min,max)){
        showError(empName,`Name must be between ${min} and ${max} characters.`)
    }
    else if(!(regExp.test(username))){
        showError(empName,"Name cannot include special character and number.")
    }
    else{
        showSuccess(empName);
        valid = true
    }
    return valid;
};

// employee ID
function checkUserEid(){
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

// Request amount
function checkAmount(){
    var validity = false
    var text = rAmount.value.trim()
    var regExp = /[0-9]+$/g 

    if (text === ""){
        validity = false
        showError(rAmount,"Request amount cannot be empty")
    }
    else if(!(regExp.test(text)))
    {
        validity = false
        showError(rAmount,"Request amount cannot contain special character and alphabets.")
    }
    else if(!(text.length <= 5)){
        validity = false
        showError(rAmount,"Amount limit is Nu 15,999.")
    }
    else{
        validity = true
        showSuccess(rAmount);
    }
    return validity
}

// Bank account
function checkBankAccount(){
    var validity = false
    var text = bAccount.value.trim()
    var regExp = /[0-9]+$/g 

    if (text === ""){
        validity = false
        showError(bAccount,"Bank account cannot be empty")
    }
    else if(!(regExp.test(text)))
    {
        validity = false
        showError(bAccount,"Bank account cannot contain special character and alphabets.")
    }
    else if(!(text.length === 11)){
        validity = false
        showError(bAccount,"Account number should be 11 digits.")
    }
    else{
        validity = true
        showSuccess(bAccount);
    }
    return validity
}


// Reason
function checkReason(){
    var validity = false
    var text = reason.value.trim()

    if (text === ""){
        validity = false
        showError(reason,"State your reason.")
    }
    else if(text.length < 40){
        validity = false
        showError(reason,"The reason should be more than 40 words")
    }
    else{
        validity = true
        showSuccess(reason);
    }
    return validity
}

// Reason
function checkTerm(){
    var validity = false
    
    if(!(checkBox.checked)){
        validity = false
        showError(checkBox,"Check the term and condition")
    }
    else{
        validity = true
        showSuccess(checkBox);
    }
    return validity
}

form.addEventListener("submit",function (e) {
    e.preventDefault();

    let check1 = checkUsername()
    let check2 = checkUserEid()
    let check3 = checkAmount()
    let check4 = checkBankAccount()
    let check5 = checkReason()
    let check6 = checkTerm()

    let isFormValid = check1 && check2 && check3 && check4 && check5 && check6;

    if(isFormValid){
        insertNewRecord()
    }
});

// CRUD : Create
function insertNewRecord(){
    var i = 1
    var table = document.querySelector(".finance-table").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = i;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = eid.value;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = empName.value;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = rAmount.value;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = "Processing";
    
    i += 1;
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
let screenWidth = screen.width
const textArea = document.querySelector("#Reason")
const textArea2 = document.querySelector("#Reason2")

if(screenWidth <= 765){
    textArea.setAttribute("cols","60")
    textArea2.setAttribute("cols","60")
}

// Validation : Promotions
// Selects the elements in html
var eid = undefined;
var Name = undefined;
var reason = undefined; 
var desiredPosition = undefined;
var currentPosition = undefined;
var file = undefined;
var formType = undefined;
const pform = document.querySelector(".promotion");
const rform = document.querySelector(".resignation");


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
        showError(reason,"The reason should be more than 200 character.")
    }
    else{
        validity = true
        showSuccess(reason);
    }
    return validity
}

// Position
function checkCurrentPosition(){
    var validity = false
    var text = currentPosition.value

    if (text === "Choose"){
        validity = false
        showError(currentPosition,"Choose a position")
    }
    else{
        validity = true
        showSuccess(currentPosition);
    }
    return validity
}

function checkDesiredPosition(){
    var validity = false
    var text = desiredPosition.value

    if (text === "Choose"){
        validity = false
        showError(desiredPosition,"Choose a position")
    }
    else{
        validity = true
        showSuccess(desiredPosition);
    }
    return validity
}

function checkFile(){
    var validity = false
    var text = file.value

    if (text === ""){
        validity = false
        showError(file,"Choose a file")
    }
    else{
        validity = true
        showSuccess(file);
    }
    return validity
}

pform.addEventListener("submit",function (e) {
    e.preventDefault();
    console.log("x")

    // value
    eid = document.querySelector(".p-eid");
    Name = document.querySelector(".p-name");
    reason = document.querySelector("#p-Reason") 
    currentPosition = document.querySelector("#currentPosition")
    desiredPosition = document.querySelector("#DesiredPosition");


    let check1 = checkUsername()
    let check2 = checkUserEid()
    let check3 = checkReason()
    let check4 = checkCurrentPosition()
    let check5 = checkDesiredPosition()

    let isFormValid = check1 && check2 && check3 && check4 && check5;

    if(isFormValid){
        formType = "Promotion"
        insertNewRecord()
    }

});

rform.addEventListener("submit",function (e) {
    e.preventDefault();

    // value
    eid = document.querySelector(".r-eid");
    Name = document.querySelector(".r-name");
    reason = document.querySelector("#r-Reason");
    currentPosition = document.querySelector("#position")
    file = document.querySelector("#file-link")

    let check1 = checkUsername()
    let check2 = checkUserEid()
    let check3 = checkReason()
    let check4 = checkCurrentPosition()
    let check5 = checkFile()


    let isFormValid = check1 && check2 && check3 && check4 && check5;

    if(isFormValid){
        formType = "Resignation"
        insertNewRecord()
    }


});

// CRUD : Create
function insertNewRecord(){
    var table = document.querySelector(".employee-table").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = eid.value;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = Name.value;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = formType;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "Processing";

    resetForm()
}

function resetForm(){
    eid.value = "";
    Name.value = "";
    reason.value = "";
    desiredPosition.value = "Choose";
    currentPosition.value = "Choose";
    document.querySelector("#position")
    file.value = null
}


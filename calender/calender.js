const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")
const month = document.querySelector(".month")

var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var currentMonthIndex = 10
var nextMonthIndex = 0

month.innerHTML = monthArr[currentMonthIndex] +"2022"

leftArrow.addEventListener("click", () => {
    if(currentMonthIndex > 0){
        nextMonthIndex = - 1
    }
    else{
        nextMonthIndex = 0
    }
    updateMonth(nextMonthIndex)
})

rightArrow.addEventListener("click", () => {
    if(currentMonthIndex < 11){
        nextMonthIndex = 1
    }
    else{
        nextMonthIndex = 0
    }
    updateMonth(nextMonthIndex)
})

function updateMonth(index){
    currentMonthIndex = currentMonthIndex + index
    month.innerHTML = monthArr[currentMonthIndex] +"2022"
}

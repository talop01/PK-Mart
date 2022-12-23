// Selection the menu element
const menu = document.querySelector("#menu-logo")
const sideBar = document.querySelector(".home-left-column")

// Hiding and showing menu icon
menu.addEventListener("click",() => {
    if(sideBar.classList.contains("hide-sidebar")){
        menu.innerText = "close" 
        sideBar.classList.remove("hide-sidebar")       
    }
    else{
        sideBar.classList.add("hide-sidebar") 
        menu.innerText = "menu" 
    }
})

// Making smooth redirection to notification section.
function smooth(){
    let currentElement = document.querySelector("#notification")
    currentElement.scrollIntoView({
        behavior : "smooth"
    })
}

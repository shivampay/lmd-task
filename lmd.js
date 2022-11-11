const flex = document.querySelector(".flex")
const rightNav = document.querySelector(".rightnav")
const new-li = document.querySelector(".new-li")


flex.addEventListener("click",function(){
flex.style.transform = "translate(0%)"
const bodyOverlay = document.createElement("div")
bodyOverlay.classList.add("overlay");
setTimeout(fuction(){
    document.querySelector("body").append(bodyOverlay)
},300)
})







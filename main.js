import { motto,panelBackgrounds } from "./assets.js";

console.log(motto);

motto.forEach(word=>
    document.querySelector(".panels").innerHTML += `<div class="panel">${word}</div>`
    )

let panelsNList=document.querySelectorAll(".panel")
panelsNList.forEach((obj,index)=>obj.style.backgroundImage=`url(${panelBackgrounds[index]})`)

document.querySelector(".panels").addEventListener("click",toggleOpen)

function toggleOpen(e){
    if(e.target.classList.contains("open")){
        e.target.classList.remove("open")
    }else{
        panelsNList.forEach(obj=>obj.classList.remove("open"))
        e.target.classList.add("open")
        
    }
}
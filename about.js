import { motto, panelBackgrounds } from "./assets.js";
import { getData } from "./assets.js";



export const about = () => {

    motto.forEach((word,idNum)=>{
        document.querySelector(".panels").innerHTML += `<div class="panel id${idNum+1}">${word}</div>`;
        idNum+=1
    });

    let panelsNList = document.querySelectorAll(".panel");
    panelsNList.forEach(
        (obj, index) => (obj.style.backgroundImage = `url(${panelBackgrounds[index]})`)
    );

    document.querySelector(".panels").addEventListener("click", toggleOpen);

    const url = "https://raw.githubusercontent.com/TheRedOwl/portfolio/master/aboutInfo.json";
    
    getData(url, aboutText);

    function aboutText(aboutData){
        aboutData.forEach((elements) => {
            document.querySelector(".aboutText").innerHTML += `
            <div class="textId${elements.id} textPanels d-none row row-cols-1 row-cols-md-2">
                <div class="col">
                    <div class="text">
                        <h2>${elements.topic}</h2>
                        <p>${elements.text}</p>
                    </div>
                </div>
                <div class="col">
                    <img src="${elements.picture}" class="img-fluid aboutImg" alt="">
                </div>
            </div>`
        })
    }

    document.querySelector(".textPanels").addEventListener("click", toggleOpen);

    function toggleOpen(e) {
        const numbers=[1,2,3,4,5,6]
        if (e.target.classList.contains("open")) {
            e.target.classList.remove("open");

            document.querySelector(".mainAboutTextPanel").classList.remove("d-none")

            numbers.forEach((num)=>{
                if(e.target.classList.contains(`id${num}`)==true){
                    document.querySelector(`.textId${num}`).classList.add("d-none")
                    document.querySelector(`.textId${num}`).classList.remove("d-flex")
                }
            })
        } else {
            document.querySelector(".mainAboutTextPanel").classList.add("d-none")
            panelsNList.forEach((obj) => obj.classList.remove("open"));
            e.target.classList.add("open");

            numbers.forEach((num)=>{
                    document.querySelector(`.textId${num}`).classList.add("d-none")
                    document.querySelector(`.textId${num}`).classList.remove("d-flex")
                if(e.target.classList.contains(`id${num}`)==true){
                    document.querySelector(`.textId${num}`).classList.remove("d-none")
                    document.querySelector(`.textId${num}`).classList.add("d-flex")
                }
            })
        }
    }
};
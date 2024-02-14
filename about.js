import { motto, panelBackgrounds } from "./assets.js";
import { getData } from "./assets.js";



export const about = () => {

    motto.forEach((word,idNum)=>{
        document.querySelector(".panels").innerHTML += `<div class="panel id${idNum+1}">${word}</div>`;
        idNum+=1
    });

    let panelsNList = document.querySelectorAll(".panel");
    panelsNList.forEach(
        (obj, index) =>
            (obj.style.backgroundImage = `url(${panelBackgrounds[index]})`)
    );

    document.querySelector(".panels").addEventListener("click", toggleOpen);
    const url = "https://raw.githubusercontent.com/TheRedOwl/portfolio/master/aboutInfo.json";
    
    getData(url, aboutText);

    function aboutText(aboutData){
        aboutData.forEach((elements) => {
            document.querySelector(".aboutText").innerHTML += `
            <div class="d-flex">
                <div class="text">
                    <h2>${elements.topic}</h2>
                    <p>${elements.text}</p>
                </div>
                <div class="pic">
                    <img src="${elements.picture}" class="img-fluid" alt="">
                </div>
            </div>`
        })
    }

    function toggleOpen(e) {
        const numbers=[1,2,3,4,5,6]
        if (e.target.classList.contains("open")) {
            e.target.classList.remove("open");
        } else {
            panelsNList.forEach((obj) => obj.classList.remove("open"));
            e.target.classList.add("open");
            numbers.forEach((num)=>{
                if(e.target.classList.contains(`id${num}`)){

                }
            })

        }
    }

    

    
};
import { getData } from "./assets.js";

export const projects = () => {
    const url = "https://raw.githubusercontent.com/TheRedOwl/portfolio/master/portfolioData.json";
    getData(url, ButtonGenerator);

    function ButtonGenerator(data) {
        console.log(data);
        data.forEach((element) => {
            document.querySelector(".projectsData").innerHTML += `
            <div class="card" id="project${element.id}" style="width: 18rem;">
            <img data-src="${element.img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
            </div>
            <div class="card-body projectButtons">
                <a href="${element.hosted}" target="blank_" class="btn btn-primary">Go to the page!</a>
                <a href="${element.github}" target="blank_" class="btn btn-primary"><i class="fa-brands fa-github fa-xl"></i></a>
                <a href="${element.imgs}" target="blank_" class="btn btn-primary"><i class="fa-solid fa-image fa-xl"></i></a>
            </div>
        </div>
            `;
        });
    }
};

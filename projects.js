import { getData } from "./assets.js";

export const projects = () => {
    const url = "https://raw.githubusercontent.com/TheRedOwl/portfolio/master/portfolioData.json";
    getData(url, ProjectCards);

    function ProjectCards(data) {
        console.log(data);
        data.forEach((element) => {
            document.querySelector(".projectsData").innerHTML += `
            <div class="col">
                <div class="card" id="project${element.id}">
                    <button id="imgButton${element.id}" class="btn projectSingleButton" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal${element.id}"><img src="${element.img}" class="card-img-top" alt="..."></button>
                    <div class="card-body">
                        <h2 class="card-title">${element.name}</h2>
                        <p class="card-text">${element.description}</p>
                    </div>
                    <div class="card-body projectButtons btn-group" role="group" aria-label="Basic example">
                        <a href="${element.hosted}" target="blank_" class="btn projectSingleButton">Go to the page!</a>
                        <a href="${element.github}" target="blank_" class="btn projectSingleButton"><i class="fa-brands fa-github fa-xl"></i></a>
                        <button id="imgButton${element.id}" class="btn projectSingleButton" type="button" data-bs-toggle="modal" data-bs-target="#extraImgsModal${element.id}"><i class="fa-solid fa-image fa-xl"></i></button>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="extraImgsModal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="exampleModalLabel">${element.name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${element.imgs}" alt="" class="img-fluid">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn projectSingleButton" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="exampleModalLabel">${element.name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${element.img}" alt="" class="img-fluid">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn projectSingleButton" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>`;

        });
    }

};

import { getData } from "./assets.js";

export const projects = () => {
    const url = "https://raw.githubusercontent.com/TheRedOwl/portfolia-data/main/portfolioData.json";
    getData(url, ButtonGenerator);

    function ButtonGenerator(data) {
        console.log(data);
        data.forEach((element) => {
            document.querySelector(".projectsData").innerHTML += `
                <div class="button col-md-6">
                    <h1>${element.name}</h1>
                    <span>${element.desciption}</span>
                </div>`;
        });
    }
};

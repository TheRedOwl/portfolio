export const contacts = () => {

    document.querySelector(".card-header-tabs").innerHTML+=`
        <li class="nav-item">
            <div class="nav-link contactsButton">Social</div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/about">About Me</a>
        </li>
    `

    document.querySelector(".contactsButton").addEventListener("click", openSocial);

    function openSocial(){
        if(document.querySelector(".contactsSocial").classList.contains("d-none")==true){
            document.querySelector(".mailUl").classList.add("d-none")
            document.querySelector(".contactsSocial").classList.remove("d-none")
        } else{
            document.querySelector(".contactsSocial").classList.add("d-none")
            document.querySelector(".mailUl").classList.remove("d-none")
        }
    }
}
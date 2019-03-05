function sidebar() {
    document.getElementById("navbar").classList.toggle('active');
}

// THIS IS THE STYLES TO LET THE BODY MOVE IN AS THE NAVBAR OPENS
let openBody = false;

let bodyCompress = function () {
       let content = document.querySelector(".wrapper");
           headerBg = document.querySelector("header")

        if (openBody === false) {
            content.style.marginLeft = "12%";
            content.style.width = "88%";
            content.style.transition = "margin 0.5s ease-in-out, width 0.5s ease-in-out";
            headerBg.style.backgroundSize = "84rem 100%"

            openBody = true;
        }

        else if (openBody === true) {
            content.style.marginLeft = "0";
            content.style.width = "100%";
            content.style.transition = "margin 0s ease-in-out, width 0s ease-in-out";
            headerBg.style.backgroundSize = "100% 100%";
            
            openBody = false;
        }
}



// THIS IS THE STYLES FOR THE CONTACT INFORMATION MENU
let toggleContactMenu = false;

let toggleMenu = function () {
    
    let buttonSwitch = document.querySelector(".main-button");
        cellNumber = document.querySelector(".phone");
        email = document.querySelector(".email");
        aboutMe = document.querySelector(".about-me");
        projects = document.querySelector(".portfolio");

        if (toggleContactMenu === false) {

            buttonSwitch.style.width = "14rem";
            buttonSwitch.style.height = "14rem";
            buttonSwitch.style.background = "rgba(255, 0, 0, 0)";

            cellNumber.style.top = "0";
            cellNumber.style.opacity = "1";

            email.style.left = "0";
            email.style.opacity = "1";

            aboutMe.style.bottom = "0";
            aboutMe.style.opacity = "1";

            projects.style.right = "0";
            projects.style.opacity = "1";

            toggleContactMenu = true;
        }

        else if (toggleContactMenu === true) {

            buttonSwitch.style.width = "3rem";
            buttonSwitch.style.height = "3rem";
            buttonSwitch.style.background = "rgba(255, 0, 0, 0.5)";

            cellNumber.style.top = "4rem";
            cellNumber.style.opacity = "0";

            email.style.left = "4rem";
            email.style.opacity = "0";

            aboutMe.style.bottom = "4rem";
            aboutMe.style.opacity = "0";

            projects.style.right = "4rem";
            projects.style.opacity = "0";

            toggleContactMenu = false;
        }


}

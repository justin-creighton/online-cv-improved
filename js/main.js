function sidebar() {
    document.getElementById("navbar").classList.toggle('active');
}

// THIS IS THE STYLES FOR THE CONTACT INFORMATION MENU
let toggleContactMenu = false;

let toggleMenu = function () {
    
    let buttonSwitch = document.querySelector(".main-button-toggle");
        cellNumber = document.querySelector(".phone");
        email = document.querySelector(".email");
        aboutMe = document.querySelector(".about-me");
        projects = document.querySelector(".portfolio");

        if (toggleContactMenu === false) {

            buttonSwitch.style.width = "12rem";
            buttonSwitch.style.height = "12rem";
            buttonSwitch.style.background = "rgba(255, 0, 0, 0.3)";

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

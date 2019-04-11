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

            buttonSwitch.style.animation = "pulsating 0s ease infinite";
            buttonSwitch.style.width = "5rem";
            buttonSwitch.style.height = "5rem";
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

            buttonSwitch.style.animation = "pulsating 1.5s ease infinite";
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
};

let i = 0;
    para1 = 'I am a hardworking individual who likes challenges, because I believe it allows us to discover new things and reach greater heights. I enjoy working within a team, especially a diverse one, because it allows you to come up with ideas quicker and we get ideas from differt persecptives.' + "Technology has been my thing for as long as I can remember and I am always looking atthe latest trends and descoveries in the tech industry. I am good at working in a team and good at problem solving. I am very creative and like to follow my passions and my imagination";
    speed = 50;

function typeWriter() {
    if (i < para1.length) {
        document.getElementById("paragraph1").innerHTML += para1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        typeWriter();
    } 
}

// THIS IS THE FUNCTION FOR THE NAVBAR TOGGLE ANIMATION
let navBarAnim = 1;

let spinAnimation = function() {
    let stripes = document.querySelectorAll(".spin");
        menuBtn = document.querySelector("#menu-toggle-btn");

    if(navBarAnim === 1){
        for(let i = 0; i < stripes.length; i++){
          stripes[0].style.transform = "rotateZ(405deg)";
          stripes[0].style.top = "1.05rem";
          stripes[1].style.opacity = "0";
          stripes[2].style.transform = "rotateZ(-405deg)";
          stripes[2].style.bottom = "1.05rem";
          stripes[i].style.animation = "shift-open 1s ease forwards";
        };
        menuBtn.style.borderRadius = "50%";
        menuBtn.style.width = "2.4rem";

        navBarAnim = 0;

    }else if(navBarAnim === 0){
        for(let i = 0; i < stripes.length; i++){
          stripes[0].style.transform = "rotateZ(0deg)";
          stripes[0].style.top = "0.4rem";
          stripes[1].style.opacity = "1";
          stripes[2].style.transform = "rotateZ(0deg)";
          stripes[2].style.bottom = "0.4rem";
          stripes[i].style.animation= "shift-close 1s ease forwards";
        };
        menuBtn.style.borderRadius = "0.2rem";
        menuBtn.style.width = "2.8rem";

        navBarAnim = 1;
    };
};

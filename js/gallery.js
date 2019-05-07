// THIS IS THE FUNCTION TO OPEN THE GALLERY
let galleryToggleStatus = false;

let galleryToggle = function() {

    let gallery = document.querySelector(".gallery");
        galleryBtn = document.querySelector('.gallery-open-btn');

        if (galleryToggleStatus === false) {
            gallery.style.left = "0";
            galleryBtn.style.display = "initial";

            galleryToggleStatus = true;
        }

        else if (galleryToggleStatus === true) {
            gallery.style.left = "-100vw";
            galleryBtn.style.display = "none";

            galleryToggleStatus = false;
        }
};

let i = 0;
    currentImage = document.querySelector(".galleryImage");

let images = [
                "images/drawings/landscape/eye.jpg",
                "images/drawings/landscape/glasses.jpg",
                "images/drawings/portrait/goku.jpg",
                "images/drawings/landscape/house.jpg",
                "images/drawings/landscape/ichigo.jpg",
                "images/drawings/landscape/mamori.jpg",
                "images/drawings/landscape/madara.jpg",
                "images/drawings/landscape/kekashi.jpg",
                "images/drawings/landscape/minto.jpg",
                "images/drawings/landscape/naruto.jpg",
                "images/drawings/landscape/pain.jpg",
                "images/drawings/portrait/rei.jpg",
                "images/drawings/landscape/sakura.jpg",
                "images/drawings/portrait/miku.jpg",
                "images/drawings/landscape/yankeez.jpg",
                "images/drawings/landscape/hinata.jpg",
                "images/drawings/landscape/warrior.jpg",
                "images/drawings/landscape/richan.jpg",
                "images/drawings/landscape/kim.jpg"
            ]

// THIS IS THE FUNTION TO MOVE FORWARD THROUGH THE ARRAY
function next(){
    if(i < images.length - 1){
        currentImage.src = images[i + 1];
        i++;
    }

    else {
        i = 0;
        currentImage.src = images[i];
    } 

    console.log(images[i]);
}    

// THIS IS THE FUNCTION TO DECREASE THE VALLUE OF THE ARRAY
function prev(){
    if(i > 0){
        currentImage.src = images[i - 1];
        i--;
    }

    else {
        currentImage.src = images[images.length - 1];
        i = images.length - 1;
    }
}

window.onload = currentImage.src = images[0];

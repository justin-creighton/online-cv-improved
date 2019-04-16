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

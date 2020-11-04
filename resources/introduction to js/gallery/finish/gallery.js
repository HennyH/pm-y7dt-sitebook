// what is a url
// parameters
// functions
// modulus
function createImageGallery(imgElement, imgUrls, imgDuration) {
    let currentPhoto = 0;

    function changePhoto() {
        const newPhotoUrl = imgUrls[currentPhoto++ % imgUrls.length];
        imgElement.src = newPhotoUrl;
    }

    setInterval(changePhoto, imgDuration);
}

const flowerGallery = document.getElementById("flower-gallery");
const flowerImgUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portulaca_in_Kadavoor.jpg/256px-Portulaca_in_Kadavoor.jpg",
    "https://www.gardeningknowhow.com/wp-content/uploads/2015/11/dahlia-type.jpg",
    "https://www.proflowers.com/blog/wp-content/plugins/pf-flowertypes/image/balloon-flower-829670.jpg"
];
const flowerImageDuration = 2000;
createImageGallery(flowerGallery, flowerImgUrls, flowerImageDuration);

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rainbowifyElement(element, colorDuration) {
    function changeColor() {
        const r = random(0, 255);
        const g = random(0, 255);
        const b = random(0, 255);
        element.style.color = `rgb(${r}, ${g}, ${b})`;
        element.style.fontSize = `${random(1, 6)}em`;
    }

    setInterval(changeColor, colorDuration);
}

const galleryHeader = document.querySelector("h1");
rainbowifyElement(galleryHeader, 500);
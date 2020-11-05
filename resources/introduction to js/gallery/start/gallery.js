/**
 * Turn an <img> element into a gallery that cycles through the given images on
 * a particular interval.
 * @param {HTMLImageElement} imgElement The <img> element to turn into a gallery.
 * @param {Array<string>} imgUrls The urls of the images to display.
 * @param {number} imgDuration The milliseconds to display each image for.
 */
function createImageGallery(imgElement, imgUrls, imgDuration) {
    let currentPhotoIndex = 0;
    
    /**
     * This function when invoked will cause the next image to display in the carousel.
     */
    function changePhoto() {
        
    }
    
    setInterval(changePhoto, imgDuration);
}

/**
 * Generate a random number between a minimum and maxinumum value.
 * @param {number} min The minimum number to generate.
 * @param {number} max The maximum number to generate.
 * @returns {number} A random number between min and max.
 */
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Turn a HTML element rainbowified - by having it's text color change randomly.
 * @param {HTMLElement} element The elements whose text should become rainbowified.
 * @param {number} colorDuration The milliseconds between changing color.
 */
function ranbowifyElement(element, colorDuration) {
    /**
     * This function when invoked will change the color property of the element to a
     * random color.
     */
    function changeColor() {

    }

    setInterval(changeColor, colorDuration);
}
const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImageLoad() {

}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `resources/${imgNumber+1}.jpeg`;
    body.prepend(image);
    image.classList.add("bgImage");
    //image.addEventListener("loadend", handleImageLoad);
}

function genRandom() {
    const number = Math.floor(Math.random()* IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
const TETROMINO_IMGS = [
    "z.png", "t.png", "s.png",
    "o.png", "l.png", "j.png"
]

/* taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

function choose(array) {
    return array[getRandomIntInclusive(0, array.length - 1)];
}

function rainTetromino() {
    const score = document.getElementById("score");
    const container = document.createElement("div");
    container.style = `
        position: absolute;
        width: 100px;
        top: 0;
        left: 0;
        transition: transform 1s linear;
    `;
    const img = document.createElement("img");
    img.style = `width: 100px; pointer-events: none;`;

    setInterval(() => {
        img.src = `images/${choose(TETROMINO_IMGS)}`;
        container.style.transform = `translate(${getRandomIntInclusive(200, window.innerWidth - 200)}px,
                                         ${getRandomIntInclusive(200, window.innerHeight - 200)}px)
                                     rotate(${getRandomIntInclusive(0, 360)}deg)`;
    }, 1000);

    container.addEventListener("mousedown", () => {
        score.innerText = parseInt(score.innerText) + 1;
    });

    container.append(img);
    document.body.append(container);
}

rainTetromino();
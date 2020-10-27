function createChalkCursor() {
    const chalkImg = document.createElement("img");
    chalkImg.src = "images/chalk.png";
    chalkImg.className = "chalk-cursor";
    document.body.append(chalkImg);

    document.addEventListener("mousemove", event => {
        chalkImg.style = `display: initial; top: ${event.pageY}px; left: ${event.pageX}px;`;
    });
}

createChalkCursor();
/**
 * Shuffles an array like a deck of cards.
 * @param {Array} array The array to shuffle.
 */
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}

/**
 * Generate a random number between a minimum and maximum value.
 * @param {number} min The minimum number that can be generated.
 * @param {number} max The maximum number that can be generated.
 */
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Choose a number of items randomly from an array.
 * @param {Array} array The array to choose items from.
 * @param {number} n The number of items to choose.
 */
function choose(array, n) {
  array = [...array];
  shuffle(array);
  return array.filter((_, i) => i < n);
}

/**
 * Returns an array of strings which will be used as face values for cards.
 */
function getPossibleCardFaceValues() {
  const pokemonImgNamesJson = `WyIxLmdpZiIsDQoiMTAuZ2lmIiwNCiIxMDAuZ2lmIiwNCiIxMDEuZ2lmIiwNCiIxMDIuZ2lmIiwNCiIxMDMuZ2lmIiwNCiIxMDQuZ2lmIiwNCiIxMDUuZ2lmIiwNCiIxMDYuZ2lmIiwNCiIxMDcuZ2lmIiwNCiIxMDguZ2lmIiwNCiIxMDkuZ2lmIiwNCiIxMS5naWYiLA0KIjExMC5naWYiLA0KIjExMS5naWYiLA0KIjExMi5naWYiLA0KIjExMy5naWYiLA0KIjExNC5naWYiLA0KIjExNS5naWYiLA0KIjExNi5naWYiLA0KIjExNy5naWYiLA0KIjExOC5naWYiLA0KIjExOS5naWYiLA0KIjEyLmdpZiIsDQoiMTIwLmdpZiIsDQoiMTIxLmdpZiIsDQoiMTIyLmdpZiIsDQoiMTIzLmdpZiIsDQoiMTI0LmdpZiIsDQoiMTI1LmdpZiIsDQoiMTI2LmdpZiIsDQoiMTI3LmdpZiIsDQoiMTI4LmdpZiIsDQoiMTI5LmdpZiIsDQoiMTMuZ2lmIiwNCiIxMzAuZ2lmIiwNCiIxMzEuZ2lmIiwNCiIxMzIuZ2lmIiwNCiIxMzMuZ2lmIiwNCiIxMzQuZ2lmIiwNCiIxMzUuZ2lmIiwNCiIxMzYuZ2lmIiwNCiIxMzcuZ2lmIiwNCiIxMzguZ2lmIiwNCiIxMzkuZ2lmIiwNCiIxNC5naWYiLA0KIjE0MC5naWYiLA0KIjE0MS5naWYiLA0KIjE0Mi5naWYiLA0KIjE0My5naWYiLA0KIjE0NC5naWYiLA0KIjE0NS5naWYiLA0KIjE0Ni5naWYiLA0KIjE0Ny5naWYiLA0KIjE0OC5naWYiLA0KIjE0OS5naWYiLA0KIjE1LmdpZiIsDQoiMTUwLmdpZiIsDQoiMTUxLmdpZiIsDQoiMTUyLmdpZiIsDQoiMTUzLmdpZiIsDQoiMTU0LmdpZiIsDQoiMTU1LmdpZiIsDQoiMTU2LmdpZiIsDQoiMTU3LmdpZiIsDQoiMTU4LmdpZiIsDQoiMTU5LmdpZiIsDQoiMTYuZ2lmIiwNCiIxNjAuZ2lmIiwNCiIxNjEuZ2lmIiwNCiIxNjIuZ2lmIiwNCiIxNjMuZ2lmIiwNCiIxNjQuZ2lmIiwNCiIxNjUuZ2lmIiwNCiIxNjYuZ2lmIiwNCiIxNjcuZ2lmIiwNCiIxNjguZ2lmIiwNCiIxNjkuZ2lmIiwNCiIxNy5naWYiLA0KIjE3MC5naWYiLA0KIjE3MS5naWYiLA0KIjE3Mi5naWYiLA0KIjE3My5naWYiLA0KIjE3NC5naWYiLA0KIjE3NS5naWYiLA0KIjE3Ni5naWYiLA0KIjE3Ny5naWYiLA0KIjE3OC5naWYiLA0KIjE3OS5naWYiLA0KIjE4LmdpZiIsDQoiMTgwLmdpZiIsDQoiMTgxLmdpZiIsDQoiMTgyLmdpZiIsDQoiMTgzLmdpZiIsDQoiMTg0LmdpZiIsDQoiMTg1LmdpZiIsDQoiMTg2LmdpZiIsDQoiMTg3LmdpZiIsDQoiMTg4LmdpZiIsDQoiMTg5LmdpZiIsDQoiMTkuZ2lmIiwNCiIxOTAuZ2lmIiwNCiIxOTEuZ2lmIiwNCiIxOTIuZ2lmIiwNCiIxOTMuZ2lmIiwNCiIxOTQuZ2lmIiwNCiIxOTUuZ2lmIiwNCiIxOTYuZ2lmIiwNCiIxOTcuZ2lmIiwNCiIxOTguZ2lmIiwNCiIxOTkuZ2lmIiwNCiIyLmdpZiIsDQoiMjAuZ2lmIiwNCiIyMDAuZ2lmIiwNCiIyMDEtYS5naWYiLA0KIjIwMS1iLmdpZiIsDQoiMjAxLWMuZ2lmIiwNCiIyMDEtZC5naWYiLA0KIjIwMS1lLmdpZiIsDQoiMjAxLWV4Y2xhbWF0aW9uLmdpZiIsDQoiMjAxLWYuZ2lmIiwNCiIyMDEtZy5naWYiLA0KIjIwMS1oLmdpZiIsDQoiMjAxLWkuZ2lmIiwNCiIyMDEtai5naWYiLA0KIjIwMS1rLmdpZiIsDQoiMjAxLWwuZ2lmIiwNCiIyMDEtbS5naWYiLA0KIjIwMS1uLmdpZiIsDQoiMjAxLW8uZ2lmIiwNCiIyMDEtcC5naWYiLA0KIjIwMS1xLmdpZiIsDQoiMjAxLXF1ZXN0aW9uLmdpZiIsDQoiMjAxLXIuZ2lmIiwNCiIyMDEtcy5naWYiLA0KIjIwMS10LmdpZiIsDQoiMjAxLXUuZ2lmIiwNCiIyMDEtdi5naWYiLA0KIjIwMS13LmdpZiIsDQoiMjAxLXguZ2lmIiwNCiIyMDEteS5naWYiLA0KIjIwMS16LmdpZiIsDQoiMjAyLmdpZiIsDQoiMjAzLmdpZiIsDQoiMjA0LmdpZiIsDQoiMjA1LmdpZiIsDQoiMjA2LmdpZiIsDQoiMjA3LmdpZiIsDQoiMjA4LmdpZiIsDQoiMjA5LmdpZiIsDQoiMjEuZ2lmIiwNCiIyMTAuZ2lmIiwNCiIyMTEuZ2lmIiwNCiIyMTIuZ2lmIiwNCiIyMTMuZ2lmIiwNCiIyMTQuZ2lmIiwNCiIyMTUuZ2lmIiwNCiIyMTYuZ2lmIiwNCiIyMTcuZ2lmIiwNCiIyMTguZ2lmIiwNCiIyMTkuZ2lmIiwNCiIyMi5naWYiLA0KIjIyMC5naWYiLA0KIjIyMS5naWYiLA0KIjIyMi5naWYiLA0KIjIyMy5naWYiLA0KIjIyNC5naWYiLA0KIjIyNS5naWYiLA0KIjIyNi5naWYiLA0KIjIyNy5naWYiLA0KIjIyOC5naWYiLA0KIjIyOS5naWYiLA0KIjIzLmdpZiIsDQoiMjMwLmdpZiIsDQoiMjMxLmdpZiIsDQoiMjMyLmdpZiIsDQoiMjMzLmdpZiIsDQoiMjM0LmdpZiIsDQoiMjM1LmdpZiIsDQoiMjM2LmdpZiIsDQoiMjM3LmdpZiIsDQoiMjM4LmdpZiIsDQoiMjM5LmdpZiIsDQoiMjQuZ2lmIiwNCiIyNDAuZ2lmIiwNCiIyNDEuZ2lmIiwNCiIyNDIuZ2lmIiwNCiIyNDMuZ2lmIiwNCiIyNDQuZ2lmIiwNCiIyNDUuZ2lmIiwNCiIyNDYuZ2lmIiwNCiIyNDcuZ2lmIiwNCiIyNDguZ2lmIiwNCiIyNDkuZ2lmIiwNCiIyNS5naWYiLA0KIjI1MC5naWYiLA0KIjI1MS5naWYiLA0KIjI1Mi5naWYiLA0KIjI1My5naWYiLA0KIjI1NC5naWYiLA0KIjI1NS5naWYiLA0KIjI1Ni5naWYiLA0KIjI1Ny5naWYiLA0KIjI1OC5naWYiLA0KIjI1OS5naWYiLA0KIjI2LmdpZiIsDQoiMjYwLmdpZiIsDQoiMjYxLmdpZiIsDQoiMjYyLmdpZiIsDQoiMjYzLmdpZiIsDQoiMjY0LmdpZiIsDQoiMjY1LmdpZiIsDQoiMjY2LmdpZiIsDQoiMjY3LmdpZiIsDQoiMjY4LmdpZiIsDQoiMjY5LmdpZiIsDQoiMjcuZ2lmIiwNCiIyNzAuZ2lmIiwNCiIyNzEuZ2lmIiwNCiIyNzIuZ2lmIiwNCiIyNzMuZ2lmIiwNCiIyNzQuZ2lmIiwNCiIyNzUuZ2lmIiwNCiIyNzYuZ2lmIiwNCiIyNzcuZ2lmIiwNCiIyNzguZ2lmIiwNCiIyNzkuZ2lmIiwNCiIyOC5naWYiLA0KIjI4MC5naWYiLA0KIjI4MS5naWYiLA0KIjI4Mi5naWYiLA0KIjI4My5naWYiLA0KIjI4NC5naWYiLA0KIjI4NS5naWYiLA0KIjI4Ni5naWYiLA0KIjI4Ny5naWYiLA0KIjI4OC5naWYiLA0KIjI4OS5naWYiLA0KIjI5LmdpZiIsDQoiMjkwLmdpZiIsDQoiMjkxLmdpZiIsDQoiMjkyLmdpZiIsDQoiMjkzLmdpZiIsDQoiMjk0LmdpZiIsDQoiMjk1LmdpZiIsDQoiMjk2LmdpZiIsDQoiMjk3LmdpZiIsDQoiMjk4LmdpZiIsDQoiMjk5LmdpZiIsDQoiMy5naWYiLA0KIjMwLmdpZiIsDQoiMzAwLmdpZiIsDQoiMzAxLmdpZiIsDQoiMzAyLmdpZiIsDQoiMzAzLmdpZiIsDQoiMzA0LmdpZiIsDQoiMzA1LmdpZiIsDQoiMzA2LmdpZiIsDQoiMzA3LmdpZiIsDQoiMzA4LmdpZiIsDQoiMzA5LmdpZiIsDQoiMzEuZ2lmIiwNCiIzMTAuZ2lmIiwNCiIzMTEuZ2lmIiwNCiIzMTIuZ2lmIiwNCiIzMTMuZ2lmIiwNCiIzMTQuZ2lmIiwNCiIzMTUuZ2lmIiwNCiIzMTYuZ2lmIiwNCiIzMTcuZ2lmIiwNCiIzMTguZ2lmIiwNCiIzMTkuZ2lmIiwNCiIzMi5naWYiLA0KIjMyMC5naWYiLA0KIjMyMS5naWYiLA0KIjMyMi5naWYiLA0KIjMyMy5naWYiLA0KIjMyNC5naWYiLA0KIjMyNS5naWYiLA0KIjMyNi5naWYiLA0KIjMyNy5naWYiLA0KIjMyOC5naWYiLA0KIjMyOS5naWYiLA0KIjMzLmdpZiIsDQoiMzMwLmdpZiIsDQoiMzMxLmdpZiIsDQoiMzMyLmdpZiIsDQoiMzMzLmdpZiIsDQoiMzM0LmdpZiIsDQoiMzM1LmdpZiIsDQoiMzM2LmdpZiIsDQoiMzM3LmdpZiIsDQoiMzM4LmdpZiIsDQoiMzM5LmdpZiIsDQoiMzQuZ2lmIiwNCiIzNDAuZ2lmIiwNCiIzNDEuZ2lmIiwNCiIzNDIuZ2lmIiwNCiIzNDMuZ2lmIiwNCiIzNDQuZ2lmIiwNCiIzNDUuZ2lmIiwNCiIzNDYuZ2lmIiwNCiIzNDcuZ2lmIiwNCiIzNDguZ2lmIiwNCiIzNDkuZ2lmIiwNCiIzNS5naWYiLA0KIjM1MC5naWYiLA0KIjM1MS5naWYiLA0KIjM1Mi5naWYiLA0KIjM1My5naWYiLA0KIjM1NC5naWYiLA0KIjM1NS5naWYiLA0KIjM1Ni5naWYiLA0KIjM1Ny5naWYiLA0KIjM1OC5naWYiLA0KIjM1OS5naWYiLA0KIjM2LmdpZiIsDQoiMzYwLmdpZiIsDQoiMzYxLmdpZiIsDQoiMzYyLmdpZiIsDQoiMzYzLmdpZiIsDQoiMzY0LmdpZiIsDQoiMzY1LmdpZiIsDQoiMzY2LmdpZiIsDQoiMzY3LmdpZiIsDQoiMzY4LmdpZiIsDQoiMzY5LmdpZiIsDQoiMzcuZ2lmIiwNCiIzNzAuZ2lmIiwNCiIzNzEuZ2lmIiwNCiIzNzIuZ2lmIiwNCiIzNzMuZ2lmIiwNCiIzNzQuZ2lmIiwNCiIzNzUuZ2lmIiwNCiIzNzYuZ2lmIiwNCiIzNzcuZ2lmIiwNCiIzNzguZ2lmIiwNCiIzNzkuZ2lmIiwNCiIzOC5naWYiLA0KIjM4MC5naWYiLA0KIjM4MS5naWYiLA0KIjM4Mi5naWYiLA0KIjM4My5naWYiLA0KIjM4NC5naWYiLA0KIjM4NS5naWYiLA0KIjM4Ni1ub3JtYWwuZ2lmIiwNCiIzODYtc3BlZWQuZ2lmIiwNCiIzODYuZ2lmIiwNCiIzOS5naWYiLA0KIjQuZ2lmIiwNCiI0MC5naWYiLA0KIjQxLmdpZiIsDQoiNDIuZ2lmIiwNCiI0My5naWYiLA0KIjQ0LmdpZiIsDQoiNDUuZ2lmIiwNCiI0Ni5naWYiLA0KIjQ3LmdpZiIsDQoiNDguZ2lmIiwNCiI0OS5naWYiLA0KIjUuZ2lmIiwNCiI1MC5naWYiLA0KIjUxLmdpZiIsDQoiNTIuZ2lmIiwNCiI1My5naWYiLA0KIjU0LmdpZiIsDQoiNTUuZ2lmIiwNCiI1Ni5naWYiLA0KIjU3LmdpZiIsDQoiNTguZ2lmIiwNCiI1OS5naWYiLA0KIjYuZ2lmIiwNCiI2MC5naWYiLA0KIjYxLmdpZiIsDQoiNjIuZ2lmIiwNCiI2My5naWYiLA0KIjY0LmdpZiIsDQoiNjUuZ2lmIiwNCiI2Ni5naWYiLA0KIjY3LmdpZiIsDQoiNjguZ2lmIiwNCiI2OS5naWYiLA0KIjcuZ2lmIiwNCiI3MC5naWYiLA0KIjcxLmdpZiIsDQoiNzIuZ2lmIiwNCiI3My5naWYiLA0KIjc0LmdpZiIsDQoiNzUuZ2lmIiwNCiI3Ni5naWYiLA0KIjc3LmdpZiIsDQoiNzguZ2lmIiwNCiI3OS5naWYiLA0KIjguZ2lmIiwNCiI4MC5naWYiLA0KIjgxLmdpZiIsDQoiODIuZ2lmIiwNCiI4My5naWYiLA0KIjg0LmdpZiIsDQoiODUuZ2lmIiwNCiI4Ni5naWYiLA0KIjg3LmdpZiIsDQoiODguZ2lmIiwNCiI4OS5naWYiLA0KIjkuZ2lmIiwNCiI5MC5naWYiLA0KIjkxLmdpZiIsDQoiOTIuZ2lmIiwNCiI5My5naWYiLA0KIjk0LmdpZiIsDQoiOTUuZ2lmIiwNCiI5Ni5naWYiLA0KIjk3LmdpZiIsDQoiOTguZ2lmIiwNCiI5OS5naWYiXQ`;
  const pokemonImgNames = JSON.parse(atob(pokemonImgNamesJson));
  return pokemonImgNames.map(n => `../../../sites/mrhollingworth/images/pokemon/${n}`);
}

/**
 * Remove all cards from a game board.
 * @param {HTMLElement} board The board HTML element which contains the cards as children.
 */
function clearCardsFromBoard(board) {
  const cards = board.querySelectorAll(".card");
  for (const card of cards) {
    board.removeChild(card);
  }
}

/**
 * Create a `div.card` element which has a given facevalue.
 * @param {string} faceValue The string to show on the card's face.
 */
function createCard(faceValue) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.classList.add("face-down");
  cardElement.dataset.faceValue = faceValue;
  const cardImg = document.createElement("img");
  cardImg.src = faceValue;
  cardElement.appendChild(cardImg);
  return cardElement;
}

/**
 * Flip a card over.
 * @param {HTMLElement} card The card to flip.
 */
function flipCard(card) {
  const isFaceUp = isCardFaceUp(card);
  if (isFaceUp) {
    card.classList.remove("face-up");
    card.classList.add("face-down");
  } else {
    card.classList.remove("face-down");
    card.classList.add("face-up");
  }
}

/**
 * Determines if a card is face-up on the board.
 * @param {HTMLElement} card 
 */
function isCardFaceUp(card) {
  return card.classList.contains("face-up");
}

/**
 * Returns true if the two cards are considered a match.
 * @param {HTMLElement} firstCard The first flipped card.
 * @param {HTMLElement} secondCard The second flipped card.
 */
function isCardMatch(firstCard, secondCard) {
  return firstCard.dataset.faceValue === secondCard.dataset.faceValue;
}

/**
 * Start a game of memory.
 * @param {HTMLElement} board The element in which to render the board.
 * @param {number} numberOfPairs The number of pairs to place on the board.
 */
function startGame(board, numberOfPairs) {
  /* randomly choose the face values for our pairs of cards */
  const possibleFaceValues = getPossibleCardFaceValues();
  const faceValues = choose(possibleFaceValues, numberOfPairs);

  /* create a two card elements for each face value - so we have pairs! */
  const cards = [];
  for (const faceValue of faceValues) {
    cards.push(createCard(faceValue), createCard(faceValue));
  }

  /* define an event handler for when a card gets clicked */
  let firstCard = undefined;
  let secondCard = undefined;

  /**
   * Handle a card being clicked.
   * @param {MouseEvent} event 
   */
  function handleCardClicked(event) {
    event.preventDefault();
    event.stopPropagation();

    const card = event.currentTarget;

    /* We cannot flip a card that is face up! */
    if (isCardFaceUp(card)) {
      return;
    }

    /* We cannot select the same card twice! */
    if (firstCard !== undefined && firstCard === card) {
      return;
    }

    /* If we've selected two cards already, dont let us select another
     * until they either got matched or flipped back over - in both cases
     * the `firstCard` and `secondCard` would've been set back to undefined.
     */
    if (firstCard !== undefined && secondCard !== undefined) {
      return;
    }

    /* Flip the selected card so it's face up */
    flipCard(card);

    /* Depending on if we've selected a card before or not
     * update the correct variable.
     */
    if (firstCard === undefined) {
      firstCard = card;
    } else {
      secondCard = card;
    }

    /* If we've flipped face up two cards, we need to check if they match,
     * and then reset our selection.
     */
    if (firstCard !== undefined && secondCard !== undefined) {
      /* We put the following code inside a `setTimeouts` so that we delay
       * running it for a short while, if we didn't then the second selected
       * card (which we just flipped) would suddenly be flipped back! This
       * looks very weird... not good!
       */
      if (isCardMatch(firstCard, secondCard)) {
        setTimeout(() => {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          firstCard = undefined;
          secondCard = undefined;
        }, 200)
      } else {
        setTimeout(() => {
          flipCard(firstCard);
          flipCard(secondCard);
          firstCard = undefined;
          secondCard = undefined;
        }, 500)
      }
    }
  }

  /* After having just defined our `handleCardClicked` function we
   * want to "attach" it to every card so it gets called when
   * we click any card.
   */
  for (const card of cards) {
    card.addEventListener("click", handleCardClicked);
  }

  /* shuffle our cards and add them to the board, otherwise all the pairs
   * would appear alongside each other!
   */
  shuffle(cards);
  for (const card of cards) {
    board.appendChild(card);
  }
}

const board = document.getElementById("board");
startGame(board, 10);

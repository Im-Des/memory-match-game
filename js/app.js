/*----- constants -----*/
const cardValues = [
  { value: '1', img: 'card_hA' },
  { value: '2', img: 'card_hK' },
  { value: '3', img: 'card_hQ' },
  { value: '4', img: 'card_hJ' },
  { value: '5', img: 'card_cA' },
  { value: '6', img: 'card_cK' },
  { value: '7', img: 'card_cQ' },
  { value: '8', img: 'card_cJ' },
  { value: '1', img: 'card_hA' },
  { value: '2', img: 'card_hK' },
  { value: '3', img: 'card_hQ' },
  { value: '4', img: 'card_hJ' },
  { value: '5', img: 'card_cA' },
  { value: '6', img: 'card_cK' },
  { value: '7', img: 'card_cQ' },
  { value: '8', img: 'card_cJ' },
];

const restartButton = document.querySelector('.restart-button')
/*----- app's state (variables) -----*/
let pickedCard = null;
let cardsPicked = []
/*----- cached element references -----*/
const gameBoard = document.querySelector('.memory-game');

/*----- event listeners -----*/

/*----- functions for card flipping -----*/


/*----- functions -----*/
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {//loops backwards through the array
    const j = Math.floor(Math.random() * (i + 1));//gives a random index number that is an integer
    [array[i], array[j]] = [array[j], array[i]];//
  }
  return array;
};

function createCardElement(value) {
  const card = document.createElement('div');
  card.className = 'card back';
  card.innerText = value;
  card.style.color = 'transparent'
  return card;
};

function checkWin() {
  const allCards = document.querySelectorAll('.card');
  let allCardsFaceUp = true;

  allCards.forEach(card => {
    if (card.classList.contains('back')) {
      allCardsFaceUp = false;
    }
  });

  if (allCardsFaceUp) {
    alert('Congratulations! You have won the game! Hit Shuffle to play again');
  }
};

function initializeGame() {

  shuffle(cardValues);

  cardValues.forEach((card, idx) => {
    const { value, img } = card;
    const cardElement = createCardElement(value, img);
    cardElement.id = idx
    gameBoard.appendChild(cardElement);
  })
};
restartButton.addEventListener('click', () => {
  gameBoard.innerHTML = '';
  initializeGame();
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', handleClick)
  });
});

initializeGame();


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', handleClick)
});
function renderCard(card) {
  card.classList.toggle('back');
  const value = card.innerText;
  const foundCard = cardValues.find(item => item.value === value);
  if (foundCard) {
    card.classList.toggle(foundCard.img, !card.classList.contains('back'));
  }
}
function handleClick(evt) {
  const clickedCard = evt.target;
  if (!clickedCard.classList.contains('back')) {
    return;
}
  if (cardsPicked.length >= 2) {
    console.log('2 cards have been selected')
    return
  }
  cardsPicked.push(clickedCard)
  renderCard(clickedCard)
  console.log(cardsPicked)
  if (pickedCard === null) {
    pickedCard = clickedCard;
  } else {
    if (pickedCard.innerText === clickedCard.innerText) {
      console.log('match found!');
      pickedCard = null;
      cardsPicked = []
    } else {
      console.log('no match!');
      setTimeout(() => {
        clickedCard.classList.add('back');
        pickedCard.classList.add('back');
        pickedCard = null;
        cardsPicked = []
      }, 1500);
    }
  }
  setTimeout(() => {
    checkWin()
  }, 100);
};


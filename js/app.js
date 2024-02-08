/*----- constants -----*/
const cardValues = [
    {value:'1', img:'card_hA'},
    {value:'2', img:'card_hK'},
    {value:'3', img:'card_hQ'},
    {value:'4', img:'card_hJ'},
    {value:'1', img:'card_hA'},
    {value:'2', img:'card_hK'},
    {value:'3', img:'card_hQ'},
    {value:'4', img:'card_hJ'},
] ;
/*----- app's state (variables) -----*/
let pickedCard = null;
/*----- cached element references -----*/
const gameBoard = document.querySelector('.memory-game');

/*----- event listeners -----*/
gameBoard.addEventListener('click', handleClick);

/*----- functions for card flipping -----*/
function handleClick(evt) {
  const clickedElement = evt.target;
  if (clickedElement.classList.contains('card')) {
      handleCardClick(clickedElement);
  }
};

function handleCardClick(clickedCard) {
  console.log('Clicked on card:', clickedCard);

  const foundCard = cardValues.find(element => element.value === clickedCard.innerText);

  if (pickedCard === null) {
      pickedCard = clickedCard;
  } else {
      if (pickedCard.innerText === clickedCard.innerText) {
          console.log('match found!');// add logic for match
      } else {
          console.log('no match!');// add logic for NO match
          setTimeout(() => {
              clickedCard.classList.add('back'); 
              pickedCard.classList.add('back'); 
              pickedCard = null; 
          }, 1500);
      }
  }
}


/*----- functions -----*/
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {//loops backwards through the array
      const j = Math.floor(Math.random() * (i + 1));//gives a random index number that is an integer
      [array[i], array[j]] = [array[j], array[i]];//
  }
  return array;
}

function createCardElement(value) {
    const card = document.createElement('div');
    card.className = 'card back';
    card.innerText = value;
    return card;
  };
  
  function initializeGame() {

    shuffle(cardValues);

    cardValues.forEach(card => {
      const { value, img } = card;
      const cardElement = createCardElement(value, img);
      gameBoard.appendChild(cardElement);
  });
}
  
  initializeGame();
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('back');
      const value = card.innerText;
      const foundCard = cardValues.find(item => item.value === value);
      if (foundCard) {
        card.classList.toggle(foundCard.img, !card.classList.contains('back'));
      }
    });
  });
  
  
  
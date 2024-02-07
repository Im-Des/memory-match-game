/*----- constants -----*/
const cardValues = [
    '1',
    '2',
    '3',
    '4',
    '1',
    '2',
    '3',
    '4'
] 
/*----- cached element references -----*/
const gameBoard = document.querySelector('.memory-game');

/*----- event listeners -----*/
gameBoard.addEventListener('click', handleClick);

/*----- functions for card flipping -----*/
function handleClick(evt) {
  const clickedElement = evt.target;
  // Check if the clicked element is a card
  if (clickedElement.classList.contains('card')) {
      // Handle card click
      handleCardClick(clickedElement);
  }
}

function handleCardClick(card) {
  // Implement card selection logic here
  console.log('Clicked on card:', card);
  // Add logic to reveal the face of the clicked card, track selected cards, etc.
}
/*----- functions -----*/
function createCardElement(value) {
    const card = document.createElement('div');
    card.className = `card ${value}`;
    card.innerText = value;
    return card;
  }
  
  function initializeGame() {

    cardValues.forEach(value => {
      const card = createCardElement(value);
      gameBoard.appendChild(card);
    });
  }
  
  initializeGame();
// const suits = ['c','h'];
// const ranks = ['J', 'Q', 'K', 'A'];

// const masterDeck = buildMasterDeck();
// renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));
  
  // function buildMasterDeck() {
  //   const deck = [];
  //   // Use nested forEach to generate card objects
  //   suits.forEach(function(suit) {
  //     ranks.forEach(function(rank) {
  //       deck.push({
  //         // The 'face' property maps to the library's CSS classes for cards
  //         face: `${suit}${rank}`,
  //         // Setting the 'value' property for game of blackjack, not war
  //         value: Number(rank) || (rank === 'A' ? 11 : 10)
  //       });
  //     });
  //   });
  //   return deck;
  // }
  // function renderDeckInContainer(deck, container) {
  //   container.innerHTML = '';
  //   // Let's build the cards as a string of HTML
  //   let cardsHtml = '';
  //   deck.forEach(function(card) {
  //     cardsHtml += `<div class="card ${card.face}"></div>`;
  //   });
  //   // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup 
  //   // const cardsHtml = deck.reduce(function(html, card) {
  //   //   return html + `<div class="card ${card.face}"></div>`;
  //   // }, '');
  //   container.innerHTML = cardsHtml;
  // }
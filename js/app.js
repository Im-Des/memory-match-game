const cardValues = [
    'card1',
    'card2'
] 
const suits = ['c','h'];
const ranks = ['J', 'Q', 'K', 'A'];

const masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));
  

function createCardElement(value) {
    const card = document.createElement('div');
    card.className = `card ${value}`;
    return card;
  }
  
  function initializeGame() {
    const gameBoard = document.querySelector('.memory-game');
  
    cardValues.forEach(value => {
      const card = createCardElement(value);
      gameBoard.appendChild(card);
    });
  }
  
  initializeGame();

  function buildMasterDeck() {
    const deck = [];
    // Use nested forEach to generate card objects
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        deck.push({
          // The 'face' property maps to the library's CSS classes for cards
          face: `${suit}${rank}`,
          // Setting the 'value' property for game of blackjack, not war
          value: Number(rank) || (rank === 'A' ? 11 : 10)
        });
      });
    });
    return deck;
  }
  function renderDeckInContainer(deck, container) {
    container.innerHTML = '';
    // Let's build the cards as a string of HTML
    let cardsHtml = '';
    deck.forEach(function(card) {
      cardsHtml += `<div class="card ${card.face}"></div>`;
    });
    // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup 
    // const cardsHtml = deck.reduce(function(html, card) {
    //   return html + `<div class="card ${card.face}"></div>`;
    // }, '');
    container.innerHTML = cardsHtml;
  }
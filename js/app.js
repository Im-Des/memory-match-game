const cardValues = [
    'card.dA',
    '.card.♦A',
    '.card.joker-black',
]
  
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
  
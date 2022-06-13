const cardValue = [{value: 11, image: './Cards/AH.png'}, {value: 2, image: './Cards/2H.png'}, {value: 3, image: './Cards/3H.png'}, {value: 4, image: './Cards/4H.png'}, {value: 5, image: './Cards/5H.png'}, {value: 6, image: './Cards/6H.png'}, {value: 7, image: './Cards/7H.png'}, {value: 8, image: './Cards/8H.png'}, {value: 9, image: './Cards/9H.png'}, {value: 10, image: './Cards/10H.png'}, {value: 10, image: './Cards/JH.png'}, {value: 10, image: './Cards/QH.png'}, {value: 10, image: './Cards/KH.png'}, {value: 11, image: './Cards/AD.png'}, {value: 2, image: './Cards/2D.png'}, {value: 3, image: './Cards/3D.png'}, {value: 4, image: './Cards/4D.png'}, {value: 5, image: './Cards/5D.png'}, {value: 6, image: './Cards/6D.png'}, {value: 7, image: './Cards/7D.png'}, {value: 8, image: './Cards/8D.png'}, {value: 9, image: './Cards/9D.png'}, {value: 10, image: './Cards/10D.png'}, {value: 10, image: './Cards/JD.png'}, {value: 10, image: './Cards/QD.png'}, {value: 10, image: './Cards/KD.png'}, {value: 11, image: './Cards/AS.png'}, {value: 2, image: './Cards/2S.png'}, {value: 3, image: './Cards/3S.png'}, {value: 4, image: './Cards/4S.png'}, {value: 5, image: './Cards/5S.png'}, {value: 6, image: './Cards/6S.png'}, {value: 7, image: './Cards/7S.png'}, {value: 8, image: './Cards/8S.png'}, {value: 9, image: './Cards/9S.png'}, {value: 10, image: './Cards/10S.png'}, {value: 10, image: './Cards/JS.png'}, {value: 10, image: './Cards/QS.png'}, {value: 10, image: './Cards/KS.png'}, {value: 11, image: './Cards/AC.png'}, {value: 2, image: './Cards/2C.png'}, {value: 3, image: './Cards/3C.png'}, {value: 4, image: './Cards/4C.png'}, {value: 5, image: './Cards/5C.png'}, {value: 6, image: './Cards/6C.png'}, {value: 7, image: './Cards/7C.png'}, {value: 8, image: './Cards/8C.png'}, {value: 9, image: './Cards/9C.png'}, {value: 10, image: './Cards/10C.png'}, {value: 10, image: './Cards/JC.png'}, {value: 10, image: './Cards/QC.png'}, {value: 10, image: './Cards/KC.png'}];

const cardBack = [{image: './Cards/cardback.png'}];
const dealerScoreDisplay = document.getElementById('dealerScore');
const userScoreDisplay = document.getElementById('userScore');
const hitBtn = document.getElementById('hit');
const standBtn = document.getElementById('stand');
const dealBtn = document.getElementById('deal');
const newGameBtn = document.getElementById('newGame');
const message = document.getElementById('message');
// USER CARD LOCATIONS
const userCardOne = document.getElementById('userCardOne');
const userCardTwo = document.getElementById('userCardTwo');
const userCardThree = document.getElementById('userCardThree');
const userCardFour = document.getElementById('userCardFour');
const userCardFive = document.getElementById('userCardFive');
const userCardDisplay = [];
// DEALER CARD LOCATIONS
const dealerCardOne = document.getElementById('dealerCardOne');
const dealerCardTwo = document.getElementById('dealerCardTwo');
const dealerCardThree = document.getElementById('dealerCardThree');
const dealerCardFour = document.getElementById('dealerCardFour');
const dealerCardFive = document.getElementById('dealerCardFive');
const dealerCardDisplay = [];

// NEW GAME SCREENS
const gameScreen = document.getElementById('gameScreen');
const runGameScreen = document.getElementById('newGameScreen');
hitBtn.style.display = 'none';
standBtn.style.display = 'none';
gameScreen.style.display = 'block'
runGameScreen.style.display = 'none'
dealBtn.style.display = 'block';
newGameBtn.style.display = 'none';

// BET OPTIONS + BANK
const tenBet = document.getElementById('10Bet')
const twentyBet = document.getElementById('20Bet')
const thirtyBet = document.getElementById('30Bet')
const fourtyBet = document.getElementById('40Bet')
const fiftyBet = document.getElementById('50Bet')
const sixtyBet = document.getElementById('60Bet')
const seventyBet = document.getElementById('70Bet')
const eightyBet = document.getElementById('80Bet')
const ninetyBet = document.getElementById('90Bet')
const hundredBet = document.getElementById('100Bet')
const bankTotal = document.getElementById('bankTotal')
const betTotal = document.getElementById('betTotal')


    
// VARIABLES
let dealerScore = 0;
let userScore = 0;
var hitCount = 0;
var standCount = 0;
var bank = 100;
var bet = 0;
bankTotal.innerHTML = bank;
let betAmount = betTotal.value;


// DEAL CARDS
dealBtn.addEventListener("click", dealButton);

function dealButton() {

// SHUFFLE ARRAY
function shuffledCardArray(array) {
  for (let i = array.length -1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const shuffledCardValue = shuffledCardArray(cardValue);

  hitBtn.style.display = 'block';
  standBtn.style.display = 'block';
  dealBtn.style.display = 'none';
  newGameBtn.style.display = 'none';
  betTotal.style.display = 'none';
  
  

  let dealOne = cardValue[0];
  userCardOne.innerHTML = '<img src="'+ dealOne.image +'">';
      userScore =+ cardValue[0].value;
        userScoreDisplay.innerHTML = userScore;

  let dealTwo = cardValue[1];
  dealerCardOne.innerHTML = '<img src="'+ dealTwo.image +'">';
      dealerScore =+ cardValue[1].value;
        dealerScoreDisplay.innerHTML = dealerScore;
    
  let dealThree = cardValue[2];
  userCardTwo.innerHTML = '<img src="'+ dealThree.image +'">';
      userScore = userScore + cardValue[2].value;
      if (cardValue[0].value === 11 && cardValue[2].value === 11) {
        userScore = userScore - 10;
        userScoreDisplay.innerHTML = userScore;
      } else {
        userScoreDisplay.innerHTML = userScore;
      } 
  
  let blankCard = cardBack[0];
  dealerCardTwo.innerHTML = '<img src="'+ blankCard.image +'">';
  decideWinner();
  }

// HIT ACTIONS
hitBtn.addEventListener("click", hitButton());

  function hitButton() {
    
    var nextHit = function() {
      switch (hitCount) {
        case 0:
            let hitOne = cardValue[4];
            userCardThree.innerHTML = '<img src="'+ hitOne.image +'">';
            let hitOneValue = hitOne.value;
            userScore = userScore + hitOneValue;
              let userThreeCardValue = [cardValue[0].value, cardValue[2].value, cardValue[4].value];
               for (var i = 0; i < userThreeCardValue.length; i++) {
                if (cardValue[0].value === 11 && cardValue[2].value === 11 && cardValue[4].value > 8) {
                  userScore = userScore - 10;
                  userScoreDisplay.innerHTML = userScore;
                }  else if ((cardValue[0].value === 11 || cardValue[2].value === 11) && userScore > 21 && cardValue[4].value != 11) {
                  userScore = userScore - 10;
                  userScoreDisplay.innerHTML = userScore;
                } else if (cardValue[0].value != 11 && cardValue[2].value != 11 && cardValue[4].value === 11 && userScore > 21) {
                  userScore = userScore - 10;
                  userScoreDisplay.innerHTML = userScore;
                } else if (userThreeCardValue[i] != 11) {
                  userScoreDisplay.innerHTML = userScore;
                }
            }
            break;

        case 1:
            let hitTwo = cardValue[6];
            userCardFour.innerHTML = '<img src="'+ hitTwo.image +'">';
            let hitTwoValue = hitTwo.value;
            userScore = userScore + hitTwoValue;
              let userFourCardValue = [cardValue[0].value, cardValue[2].value, cardValue[4].value, cardValue[6].value];
              for (var i = 0; i < userFourCardValue.length; i++) {
                if (cardValue[6].value === 11 && userScore > 21) {
                  userScore = userScore - 10;
                  userScoreDisplay.innerHTML = userScore;
                } else if (cardValue[0].value === 11 && cardValue[2].value === 11 && userScore > 21) {
                  userScore = userScore - 10;
                  userScoreDisplay.innerHTML = userScore;
                } else if (cardValue[4].value === 11 && cardValue[6].value != 11 && userScore > 21) {
                  userScore = userScore - 10;
                  userScoreDisplay.inerHTML = userScore;
                } else if ((cardValue[0].value === 11 || cardValue[2].value === 11 || cardValue[4].value === 11) && userScore > 21) {
                  userScore = userScore - 10;
                  userScoreDisplay.innerHTML = userScore;
                } else if (cardValue[6].value != 11) {
                  userScoreDisplay.innerHTML = userScore;
                }
            } 
            break;

        case 2:
            let hitThree = cardValue[8];
            userCardFive.innerHTML = '<img src="'+ hitThree.image +'">';
            let hitThreeValue = hitThree.value;
            userScore = userScore + hitThreeValue;
              let userFiveCardValue = [cardValue[6].value, cardValue[8].value];
              for (var i = 0; i < userFiveCardValue.length; i++) {
                if (cardValue[8].value === 11 && userScore > 21) {
                  userScore = userScore - 10;
                  userScoreDisplay.innerHTML = userScore;
                } else if (cardValue[8].value != 11) {
                  userScoreDisplay.innerHTML = userScore;
                }
            } 
            break;
          }
            decideWinner();
            hitCount = hitCount < 3 ? hitCount + 1 : 3;
        }
        return nextHit;
  }
  
// STAND ACTION
standBtn.addEventListener("click", standButton(), false);

  function standButton() {
    
    var nextStand = function() {
      switch (standCount) {
        case 0:
            let standOne = cardValue[3];
            dealerCardTwo.innerHTML = '<img src="'+ standOne.image +'">';
            let standOneValue = standOne.value;
            dealerScore = dealerScore + cardValue[3].value;
              let dealerTwoCardValue = [cardValue[1].value, cardValue[3].value];
              for (var i = 0; i < dealerTwoCardValue.length; i++) {
                if (dealerScore > 10 && cardValue[3].value === 11) {
                    dealerScore = dealerScore - 10;
                    dealerScoreDisplay.innerHTML = dealerScore;
                } else if (dealerScore <= 10 && cardValue[3].value === 11) {
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else {
                  dealerScoreDisplay.innerHTML = dealerScore;
                }
            } 
              if (dealerScore > 16) {
                decideWinner();
                break;
              }

        case 1:
            let standTwo = cardValue[5];
            dealerCardThree.innerHTML = '<img src="'+ standTwo.image +'">';
            let standTwoValue = standTwo.value;
            dealerScore = dealerScore + standTwoValue;
              let dealerThreeCardValue = [cardValue[1].value, cardValue[3].value, cardValue[5].value];
              for (var i = 0; i < dealerThreeCardValue.length; i++) {
                if (cardValue[1].value === 11 && cardValue[3].value === 11 && cardValue[5].value > 8) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.innerHTML = dealerScore;
                }  else if ((cardValue[1].value === 11 || cardValue[3].value === 11) && dealerScore > 21) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else if (cardValue[1].value != 11 && cardValue[3].value != 11 && cardValue[5].value === 11 && dealerScore > 21) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else if (dealerThreeCardValue[i] != 11) {
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else {
                  dealerScoreDisplay.innerHTML = dealerScore;
                }
            } 
              if (dealerScore > 16) {
                decideWinner();
                break;
              }

        case 2:
          let standThree = cardValue[7];
            dealerCardFour.innerHTML = '<img src="'+ standThree.image +'">';
            let standThreeValue = standThree.value;
            dealerScore = dealerScore + standThreeValue;
              let dealerFourCardValue = [cardValue[1].value, cardValue[3].value, cardValue[5].value, cardValue[7].value];
              for (var i = 0; i < dealerFourCardValue.length; i++) {
                if (cardValue[7].value === 11 && dealerScore > 21) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else if (cardValue[1].value === 11 && cardValue[3].value === 11 && dealerScore > 21) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else if ((cardValue[1].value === 11 || cardValue[3].value === 11 || cardValue[5].value === 11) && cardValue[7].value != 11 && dealerScore > 21) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.inerHTML = dealerScore;
                } else if (cardValue[7].value != 11) {
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else if ((cardValue[1].value === 11 || cardValue[3].value === 11 || cardValue[5].value === 11) && dealerScore > 21) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.inerHTML = dealerScore;
                } else {
                  dealerScoreDisplay.innerHTML = dealerScore;
                }
            } 
              if (dealerScore > 16) {
                decideWinner();
                break;
              }
            
        case 3:
            let standFour = cardValue[9];
            dealerCardFive.innerHTML = '<img src="'+ standFour.image +'">';
            let standFourValue = standFour.value;
            dealerScore = dealerScore + standFourValue;
              let dealerFiveCardValue = [cardValue[7].value, cardValue[9].value];
              for (var i = 0; i < dealerFiveCardValue.length; i++) {
                if (cardValue[9].value === 11 && dealerScore > 21) {
                  dealerScore = dealerScore - 10;
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else if (cardValue[9].value != 11) {
                  dealerScoreDisplay.innerHTML = dealerScore;
                } else {
                  dealerScoreDisplay.innerHTML = dealerScore;
                }
            } 
              if (dealerScore > 16) {
                decideWinner();
                break;
              }
          }
          standCount = standCount < 4 ? standCount + 1 : 4;
        }
        return nextStand;
    }



// DECIDE WINNER 
function decideWinner() {

  if (userScore === 21) {
    message.innerHTML = "BLACKJACK! You Win!"
    hitBtn.style.display = 'none';
    standBtn.style.display = 'none';
    //runGameScreen.style.display = 'block';
    newGameBtn.style.display = 'block';
    
  } else if (userScore > 21) {
    message.innerHTML = "Bust! You Lose!"
    hitBtn.style.display = 'none';
    standBtn.style.display = 'none';
    //runGameScreen.style.display = 'block';
    newGameBtn.style.display = 'block';
    
  } else if (dealerScore === 21) {
    message.innerHTML = "Dealer Blackjack! You Lose!"
    hitBtn.style.display = 'none';
    standBtn.style.display = 'none';
    //runGameScreen.style.display = 'block';
    newGameBtn.style.display = 'block';
    
  } else if (dealerScore > 21) {
    message.innerHTML = "Dealer Bust! You Win!"
    hitBtn.style.display = 'none';
    standBtn.style.display = 'none';
    //runGameScreen.style.display = 'block';
    newGameBtn.style.display = 'block';
    
  } else if (userScore > dealerScore && dealerScore > 16) {
    message.innerHTML = 'Dealer has"'+ dealerScore +'"! You Win!';
    hitBtn.style.display = 'none';
    standBtn.style.display = 'none';
    //runGameScreen.style.display = 'block';
    newGameBtn.style.display = 'block';

  } else if (dealerScore > userScore && dealerScore > 16) {
    message.innerHTML = 'Dealer has"'+ dealerScore +'"! You Lose!';
    hitBtn.style.display = 'none';
    standBtn.style.display = 'none';
    //runGameScreen.style.display = 'block';
    newGameBtn.style.display = 'block';

  } else if (userScore === dealerScore && dealerScore > 16) {
    message.innerHTML = "Draw!";
    hitBtn.style.display = 'none';
    standBtn.style.display = 'none';
    //runGameScreen.style.display = 'block';
    newGameBtn.style.display = 'block';
  }
}

// NEW GAME BUTTON
function newGameButton() {
  runGameScreen.style.display = 'none';
  userScore = 0;
  dealerScore = 0;

  hitCount = 0;
  standCount = 0;

  message.innerHTML = '';

  userCardOne.innerHTML = '';
  userCardTwo.innerHTML = '';
  userCardThree.innerHTML = '';
  userCardFour.innerHTML = '';
  userCardFive.innerHTML = '';

  dealerCardOne.innerHTML = '';
  dealerCardTwo.innerHTML = '';
  dealerCardThree.innerHTML = '';
  dealerCardFour.innerHTML = '';
  dealerCardFive.innerHTML = '';

  dealBtn.style.display = 'block';
  newGameBtn.style.display = 'none';
  betTotal.style.display = 'block';
}







// ADVANCED VERSION
// - Betting Variables
// - Betting Values
// - Bank Value

// BET OPTIONS + BANK
  //const tenBet = document.getElementById('10Bet')
  //const twentyBet = document.getElementById('20Bet')
  //const thirtyBet = document.getElementById('30Bet')
  //const fourtyBet = document.getElementById('40Bet')
  //const fiftyBet = document.getElementById('50Bet')
  //const sixtyBet = document.getElementById('60Bet')
  //const seventyBet = document.getElementById('70Bet')
  //const eightyBet = document.getElementById('80Bet')
  //const ninetyBet = document.getElementById('90Bet')
  //const hundredBet = document.getElementById('100Bet')
  //const bankDisplay = document.getElementById('bank')
  //let bank = 100
  //let bet = 0
  //bankDisplay.innerHTML = bank;

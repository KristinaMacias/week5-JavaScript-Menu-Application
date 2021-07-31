class Card { //using class to make my code modular
    constructor(suite, rank, value) {
        this.suit = suite; //includes clubs, spades, hearts and diamonds
        this.rank = rank; // for each suite, there are 13 ranks #2-9,J,Q,K,A
        this.value = value; //the value assigned to each card for comparison
    }
}

class Deck {  
    constructor() {
        this.cards = [];
    }
    createDeck (){ // using a function to create my standard deck of 52 cars
        let suits = ['♠︎','♦︎','♠','♣'];
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //must assign value on top of rank to give strength to face cards
        for(let s = 0; s < suits.length; s++) { // loops through each iteration of the suite 
            for(let r = 0; r < ranks.length; r++) { //loops through each interation of the rank
                // i have to nest rank becuase there are 13 ranks inside each suite
                this.cards.push( new Card(suits[s], ranks[r], values[j]))

            }
        }

    }
    shuffleDeck(){
        const deckShuffle = this.cards;
        for(let i = deckShuffle.length -1; i > 0; i--) {
            //loop through array starting from the end; i > 0 because we don't want 0 to be included. We decrement
            let x = Math.floor(Math.random() *i); //x is the random index. math.floor to get whole integer. Math.random to pick a random number that's less than i 
            let tempArray = deckShuffle[i]; // our temp place in the deck
            deckShuffle[i] = deckShuffle [x]; //switches index
            deckShuffle[x] = tempArray // takes switched index and lets it be the temp array?

        }
        return this.cards;
    }
    dealDeck() {
        for(let i = 0; i < 52; i += 2) { //iterates through the entire deck
            let dealFirst = this.cards.pop(); //while creating a var, removes one card from the deck array to deal 1st card
            player1.playerCards.push(dealFirst); //pushes the first card into player 1 hand
            let dealSecond = this.cards.pop(); //while creating a car, removes another card from deck array to deal 2nd card
            player2.playerCards.push(dealSecond); //pushes the 2nd card to the player 2 hand
        }
    }
}    

class Player {
    constructor(playerName, playerCards, playerPoints) {
        this.playerName = playerName;
        this.playerCards = []; //empty array where cards will go
        this.playerPoints = []; //empty array for points earned by player
    }

}
const playerInfo = new Player();
const player1 = new Player ('Kristina');
const player2 = new Player ('Computer')

class CardError {
    constructor() {

    }
}

class Game {
    constructor() {
        this.playersOfGame = [];
    }

    //functions 

    startGame(){
        this.playersOfGame.push(player1);
        this.playersOfGame.push(player2);
        deck.createDeck();
        deck.shuffleDeck();
        deck.dealDeck();
        this.gameRounds();
        this.gameScor();

    }
    gameRounds(){

    }

    gameScore(){

    }
}

// create a new deck instance named "d"
const d = new Deck();
// notice since our Deck class' constructor has no arguments, we do  // not need to pass anything into Deck()
d.createDeck();       // calling our function to fill our array
console.log(d.cards); // logging our cards array [this.cards]

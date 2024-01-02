/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...

const container = document.querySelectorAll('.cardsContainer');
const cards = document.querySelectorAll('.card');
let setNums = 'setNums';
let setNumsR = 'setNumsR';
let string1 = '';
let string2 = '';

let testStorage = localStorage.getItem(setNums);
let testStorageR = localStorage.getItem(setNumsR);

function getId(card) {
  string1 += `${card.id},`;
  localStorage.setItem(setNums, string1);
}
    
function removeId(card) {
  string2 += `${card.id},`;
  localStorage.setItem(setNumsR, string2);
}

let splitR = testStorageR.split(',');
let split1 = testStorage.split(',');

console.log(split1);
console.log(testStorageR);

function removeRed(i) {
  for (let set2 of splitR) {
    if (set2 === cards[i].id) {
      if (Array.from(cards[i].classList).includes('red')) {
        cards[i].classList.remove('red');
      }
    }
  }
}

for (let set of split1) {
  for (let i = 0; i < cards.length; i++) {
    if (set === cards[i].id) {
      if (cards[i].classList !== 'red') {
        cards[i].classList.add('red');
        removeRed(i);
      } else { };
    }   
  }
}

for (let card of cards) { 
  if (Array.from(card.classList).includes('red')) {
    getId(card);
   } 
  else if (card.classList !== 'red') {
    removeId(card);
  }
  string2 = '';
  string2.length === 0;
  card.addEventListener('click', function () {
    if (Array.from(this.classList).includes('red')) {
      this.classList.remove('red');
      removeId(this);
    } else
      if (this.classList !== 'red') {
        this.classList.add('red');
        getId(this);
      } 
  }) 
  
}


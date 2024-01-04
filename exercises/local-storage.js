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

//localStorage.clear();

let cards = document.querySelectorAll('.card');
let setNums = 'setNums';
let setNumsR = 'setNumsR';
let string1 = '';
let string2 = '';
let testStorage = localStorage.getItem(setNums);
let testStorageR = localStorage.getItem(setNumsR);
function getId(card) {
  string1 += `${card.id},`;
  localStorage.setItem(setNums, string1);
  console.log(`Added id ${card.id} to string1. string1 is now ${string1}`);
}   
function removeId(card) {
  string2 += `${card.id},`;
  localStorage.setItem(setNumsR, string2);
  console.log(`Added id ${card.id} to string2. string1 is now ${string2}`);
}
if (testStorage === null || testStorageR === null) {
  for (let card of cards) {
    if (Array.from(card.classList).includes('red')) {
      console.log()
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
} else {
  let splitR = testStorageR.split(',');
  let split1 = testStorage.split(',');

  function removeRed(i) {
    if (splitR.includes(cards[i].id)) {
      if (cards[i].classList.contains('red')) {
        cards[i].classList.remove('red');
        console.log(`removed red from ${cards[i].id}`);
      }
    }
  }
  for (let set of split1) {
    for (let i = 0; i < cards.length; i++) {
      if (set === cards[i].id) {
        if (!cards[i].classList.contains('red')) {
          cards[i].classList.add('red');
        } 
        } else {
        removeRed(i);
      } 
    }  
  }
  for (let card of cards) {
    if (Array.from(card.classList).includes('red')) {
      getId(card);
    }
    else if (!Array.from(card.classList).includes('red')) {
      removeId(card);
    }
    string2 = '';
    card.addEventListener('click', function () {
      if (this.classList.contains('red')) {
        this.classList.remove('red');
        removeId(this);
      } else if (!this.classList.contains('red')) {
        this.classList.add('red');
        getId(this);
      }
    })
  }
}
FileSystemDirectoryEntry;jnerg
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

let cards = document.querySelectorAll('.card');
let data = document.querySelectorAll('data-fav');
let string = [];

const favStorage = localStorage.getItem('fav');

function getId(card, stat) {
  if (stat === 'true') {
    card.classList.add('red');
    string.push(`${card.id}`);
  } else 
    if (stat === 'false') {
      let index = string.indexOf(card.id);
      if (index > -1) {
        string.splice(index, 1);
      }
      
    }
  let string1 = string.toString();
  localStorage.setItem('fav', string1);
  console.log(`id ${card.id}. string1 is now ${string1}`);
}   

if (favStorage === null) {
  
  for (let card of cards) {
    card.addEventListener('click', function () {
      if (this.dataset.fav === 'false') {
        this.setAttribute('data-fav', 'true');
        this.classList.add('red');
        getId(this, 'true');
      } else
        if (this.dataset.fav === 'true') {
          this.setAttribute('data-fav', 'false');
          this.classList.remove('red');
          getId(this, 'false');
        }
    })
     
  } 
  
} else {
 
  let favSplit = favStorage.split(',');
  
  for (let card of cards) {
   for (let set of favSplit) {
      if (set === card.id) {
        card.setAttribute('data-fav', 'true');
      }   
    }
    if (card.dataset.fav === 'true') {
      card.classList.add('red');
      getId(card, 'true');

    } else 
      if (card.dataset.fav === 'false') {
        card.classList.remove('red');
        getId(card, 'false');
      }
    }
  for (let card of cards) {
    card.addEventListener('click', function () {
      if (this.dataset.fav === 'false') {
        this.setAttribute('data-fav', 'true');
        getId(this, 'true');
      } else
        if (this.dataset.fav === 'true') {
          this.setAttribute('data-fav', 'false');
          card.classList.remove('red');
          getId(this, 'false');
        }
    })   
  }
}
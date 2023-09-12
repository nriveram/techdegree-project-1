/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - random quotes from movie/tv show characters from the early 2000s
***/
const quotes = [
  {quote: 'You must always have faith in people. \
  And most importantly, you must have faith in yourself.', source: 'Elle Woods', citation: 'Legally Blonde', year: '2001'},
  {quote: 'You know what I still don\'t get? Why are you trying so hard to fit in when \
  you\'re born to stand out?', source: 'Ian Wallace', citation: 'What a Girl Wants', year: '2003'},
  {quote: 'They say nothing lasts forever; dreams change, trends come and go, but friendships \
  never go out of style.', source: 'Carrie Bradshaw', citation: 'Sex and The City', year: '2008'},
  {quote: 'A queen is never late. Everyone else is simply early.', source: 'Queen Clarisse Renaldi', 
citation: 'The Princess Diaries', year: '2001'},
  {quote: 'On October 3rd, he asked me what day it was. “It’s October 3rd.”', source: 'Cady Heron', 
  citation: 'Mean Girls', year: '2004'},
  {quote: 'The most exciting, challenging and significant relationship of all is the one you have with yourself. \
  And if you find someone to love the you you love, well, that\'s just fabulous.', 
  source: 'Carrie Bradshaw', citation: 'Sex and The City'}
];


/**
 * getRandomQuote() will return a random quote object using the Math.random() to 
 * generate a random index using the quote array's length. 
 *
 * @param {null} null - none
 * @returns {Object} - returns a random quote object from the quotes array
 */
function getRandomQuote() {

  // uses the quote array's length to find a random index 
  const randNum = Math.floor(Math.random() * quotes.length); 
  return quotes[randNum]; // returns the quote literal 

}


/**
 * printQuote() will use the getRandomQuote() function to retrive a random quote
 * literal. It will use the random quote to create a template literal containing 
 * the quote, source, citation, and/or year values. Once the template literal is 
 * created, it will write onto the html tags on index.html file. 
 * 
 * @param {[null]} null - none
 * @returns {null} - none
 */
function printQuote() {
  let randQuote = getRandomQuote(); // retrives a random quote
  // creates the first paragraph 
  let html = `<p class="quote">${randQuote.quote}</p> 
  <p class="source">${randQuote.source}`; 
  // checks if random quote has a citation 
  if (randQuote.citation) {
    // if true, adds citation to html variable 
    html += `<span class="citation">${randQuote.citation}</span>`;
  }
  // checks if random quote has a year 
  if (randQuote.year) {
    // if true, adds year to the html tag 
    html += `<span class="year">${randQuote.year}</span>`; 
  }
  html += `</p>`; // adds the closing tag to the second paragraph 
  document.getElementById('quote-box').innerHTML = html; // writes to the html file

  /*Source: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp*/
  // changes the background color to a random color 
  document.body.style.backgroundColor = randomRGB(getRandomValue); 
}
/**
 * the getRandomValue() is an arrow function from the "The Refactor Challenge – Duplicate Code" 
 * Javascript Loops by Guil Hernandez video lesson that I'm reusing to complete the extra credit. 
 * 
 * In this function, it will generate a random number between 0 to 255. 
 * @returns {number} - a value between 0 and 255
 */
const getRandomValue = () => Math.floor(Math.random() * 256); 

/**
 * the randomRGB() is an arrow function from the "The Refactor Challenge – Duplicate Code" 
 * Javascript Loops by Guil Hernandez video lesson that I'm reusing to complete the extra credit. 
 * 
 * In this function, it will create a rgb value that contains 3 random numbers generated 
 * by value(). 
 * 
 * @param {value} - a function that is used to generate random rgb values 
 * @returns {template literal} - string sequence of rgb values 
 */
function randomRGB(value) {
  // creates a template literal with 3 random values
  const color = `rgb( ${value()}, ${value()}, ${value()})`;
  return color; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
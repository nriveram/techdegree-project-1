/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randNum = Math.floor(Math.random() * quotes.length); 
  return quotes[randNum];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let randQuote = getRandomQuote(); 
  let html = `<p class="quote">${randQuote.quote}</p>
  <p class="source">${randQuote.source}`; 
  if (randQuote.citation) {
    html += `<span class="citation">${randQuote.citation}</span>`;
  }
  if (randQuote.year) {
    html += `<span class="year">${randQuote.year}</span>`; 
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
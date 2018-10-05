// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote:"Don't cry because it's over, smile because it happened.",
    source: "Dr.Seuss",
    tags: "Psychology"
  },
  {
    quote: "The unexamined life is not worth living.",
    source:"Socrates",
    citation:"According to Plato's Apology (470-399 BC)",
    year:"470-399 BC",
    tags: "Psychology"
  },
  {
    quote:"One cannot step twice in the same river",
    source:"Heraclitus",
    tags: "Psychology"
  },
  {
    quote:"There is only one good, knowledge, and one evil, ignorance",
    source:"Socrates",
    tags: "Psychology"
  },
  {
    quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit",
    source:"Aristotle",
    tags: "Psychology"
  }
];

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote (array) {
  var random_num = Math.floor(Math.random() * array.length);  // Get a random number between 0-array.length, since array starts at index 0.
  var random_quote = array[random_num]
  // console.log(random_quote);
  return random_quote;
}

// Create the printQuote funtion and name it printQuote
function printQuote (array) {
var quote = getRandomQuote(quotes);
if (quote.citation || quote.year) {  // conditional statements for if the quote has citation and year properties.
document.getElementById('quote-box').innerHTML = '<p class="quote"> ' + quote.quote + '</p> <p class="source"> ' + quote.source + '<span class="citation"> ' + quote.citation + ' </span> <span class="year"> ' + quote.year + '</span> <span class= "citation" > Tags: ' + quote.tags + ' </span>  </p>';
}
else {
  document.getElementById('quote-box').innerHTML = '<p class="quote"> ' + quote.quote + '</p> <p class="source"> ' + quote.source + '<span class= "citation" > Tags: ' + quote.tags + '</span> </p>';
}
// console.log(random_quote);
return quote;
}
// Function to  randomly change the background color.
function changeColour () {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
// console.log(r);
// console.log(g);
// console.log(b);
document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";  // changes the element body's background color.
}

//Will repeatedly call the two functions after 30 secounds has passed.
setInterval(printQuote,2000);
setInterval(changeColour,2000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeColour, false); //Added listener to call the funciton changeColour.

// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote:"Don't cry because it's over, smile because it happened.",
    source: "Dr.Seuss"
  },
  {
    quote: "The unexamined life is not worth living.",
    source:"Socrates",
    citation:"According to Plato's Apology(470-399 BC)",
    year:"470-399 BC"
  },
  {
    quote:"One cannot step twice in the same river",
    source:"Heraclitus"
  },
  {
    quote:"There is only one good, knowledge, and one evil, ignorance",
    source:"Socrates"
  },
  {
    quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit",
    source:"Aristotle"
  }
];

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote (array) {
  var random_num = Math.floor(Math.random() * array.length);  // Get a random number between 0-array.length, since array starts at index 0.
  var random_quote = array[random_num];
  return random_quote
}
// Test code
// getRandomQuote(quotes);
// console.log(random_quote);

// Create the printQuote funtion and name it printQuote
function printQuote (array) {
var random_quote = getRandomQuote(array);
if (random_quote.citation || random_quote.year) {  // conditional statements for if the quote has citation and year properties.
document.getElementById('quote-box').innerHTML = "<p class="quote"> " + random_quote.quote + "</p>" +
"<p class="source"> " + random_quote.source + "<span class="citation"> " + random_quote.citation + " </span> <span class="year">" + random_quote.year + "</span>  </p>";
}
else {
  document.getElementById('quote-box').innerHTML = "<p class="quote"> " + random_quote.quote + "</p> <p class="source"> " + random_quote.source + "</p>";
}
}
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

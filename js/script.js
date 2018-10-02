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


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote (array) {
  var random_num = Math.floor(Math.random() * array.length);  // Get a random number between 0-array.length, since array starts at index 0.
  var random_quote = array[random_num];
  return random_quote.quote
}
// Test code
//var test = getRandomQuote(quotes);
//console.log(test);

// Create the getRandomQuuote function and name it getRandomQuote



// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

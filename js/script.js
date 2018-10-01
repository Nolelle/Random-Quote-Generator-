// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  quote_1 {
    quote:"Don't cry because it's over, smile because it happened.";
    source: "Dr.Seuss";
  }
  quote_2 {
    quote:“The unexamined life is not worth living”;
    source:"Socrates";
  }
  quote_3 {
    quote:“One cannot step twice in the same river”;
    source:"Heraclitus"
  }
  quote_4 {
    quote:“There is only one good, knowledge, and one evil, ignorance”;
    source:"Socrates";
  }
  quote_5 {
    quote:“We are what we repeatedly do. Excellence, then, is not an act, but a habit”;
    source:"Aristotle";
  }
]


// Create the getRandomQuuote function and name it getRandomQuote
getRandomQuote (array) {
 return array[math.random()];
}


// Create the getRandomQuuote function and name it getRandomQuote



// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    {text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    {text: "If you think it's simple, then you have misunderstood the problem", author: "Bjarne Stroustrup"},
    {text: "There are only two kinds of languages: the ones people complain about and the ones nobody uses ", author: "Bjarne Stroustrup"},
    {text: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships", author: "Linus Torvald"},
    {text: "I'd argue that everybody wants to do something that matters", author: "Linus Torvalds"},
    {text: "We do these things not because they are easy, but because we thought they were going to be easy ", author: "The Programmers Credo"},
    {text: "It always takes longer than you expect, even when you take into account Hofstadter's Law", author: "Douglas Hofstadter"},
  ];

  const quoteEl = document.getElementById('quote');
  if (!quoteEl) return;

  const textEl = quoteEl.querySelector('p');
  const authorEl = quoteEl.querySelector('cite');

  let lastIndex = -1;

  function getRandomIndex() {
    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex && quotes.length > 1);
    lastIndex = index;
    return index;
  }

  function setQuote() {
    const { text, author } = quotes[getRandomIndex()];
    textEl.textContent = text;
    authorEl.textContent = `— ${author}`;
  }

  // Initial random quote
  setQuote();

  // Change every 5 seconds
  setInterval(setQuote, 7000);
});

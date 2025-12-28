document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    { text: "Cinema is the most beautiful fraud in the world.", author: "Jean-Luc Godard" },
    { text: "Drama is life with the dull bits cut out.", author: "Alfred Hitchcock" },
    { text: "In film, we sculpt time, we sculpt behaviour and we sculpt light.", author: "David Fincher" },
    { text: "I'm a typed director. If I made Cinderella, the audience would immediately be looking for a body in the coach.", author: "Alfred Hitchcock" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    {text: "There are no rules in filmmaking. Only sins. And the cardinal sin is dullness.", author: "David Fincher"},
    {text: "Storytelling has to serve a purpose. It’s not entertainment for the sake of entertainment.", author: "David Simon"},
    {text: "The key to storytelling is authenticity. There’s nothing more important.", author: "David Simon"},
    {text: "Cinema is a worldwide phenomenon.", author: "Wim Wenders"},
    {text: "Storytelling is the most powerful way to put ideas into the world today.", author: "Robert Mckee"},
    {text: "If you just love movies enough, you can make a good one.", author: "Quentin Tarantino"}
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

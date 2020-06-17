const games = document.querySelectorAll('.m-product-placement-item');
const gamesArray = Array.from(games);
gamesArray.forEach(game => {
  const name = game.querySelector('.x1GameName').textContent;
  const imgURL = game.querySelector('img.c-image').src;
  const multiplayer = game.dataset.multiplayer;
  const platforms = game.querySelector('span.c-glyph').getAttribute('aria-label');
  console.log(name, platforms)
});


//Name
//Image URL
//Multiplayer
//Availabile on

//Rating - LATER
//Categorty - LATER

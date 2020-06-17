const games = document.querySelectorAll('.m-product-placement-item');
const gamesArray = Array.from(games);

function scrapeGamesHTML(array) {
  return array.map(game => {
    const name = game.querySelector('.x1GameName').textContent;
    const imgURL = game.querySelector('img.c-image').src;
    const multiplayer = game.dataset.multiplayer;
    const platforms = game.querySelector('span.c-glyph').getAttribute('aria-label');
    const releaseDate = parseInt(game.dataset.releasedate.slice(0,4));

    return {
      name,
      imgURL,
      multiplayer,
      platforms,
      releaseDate,
    }
  });
}

const sanitizedGames = scrapeGamesHTML(gamesArray);

console.log(sanitizedGames);

//Rating - LATER
//Categorty - LATER
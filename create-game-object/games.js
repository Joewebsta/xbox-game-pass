const games = document.querySelectorAll('.m-product-placement-item');
const gamesArray = Array.from(games);
const gameDivsWrapper = document.querySelector('.gameDivsWrapper');
const body = document.querySelector('body');

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

function clearHTML() {
  gameDivsWrapper.remove();
}


function displayGamesInBrowser(sanitizedArray) {
  clearHTML();

  sanitizedArray.forEach(game => {
    name = game.name.replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ' ')
    
    const text = `
    <pre style="margin: 0;">
      {
        name: "${name}", 
        imgURL: "${game.imgURL}", 
        multiplayer: "${game.multiplayer}", 
        platforms: "${game.platforms}", 
        releaseDate: ${game.releaseDate},
      },
    </pre>`
    body.innerHTML += text;
  })
}

displayGamesInBrowser(scrapeGamesHTML(gamesArray));

//Rating - LATER
//Categorty - LATER
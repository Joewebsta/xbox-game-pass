fetch('games.json').then((response) => {
  return response.json();
}).then((json) => {
  initialize(json);
}).catch((err) => {
  console.log('Fetch problem: ' + err.message);
});

function initialize(games) {
  const formContainer = document.querySelector('.form-container');
  const gamesContainer = document.querySelector('.games-container');
  const sortInput = document.querySelector('#sort');

  sortGames(games);

  function sortGames(games) {
    const sortType = sortInput.value;

    const sortedGames = games.sort((a, b) => {
      if (sortType === 'nameA') return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
      if (sortType === 'nameD') return a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1;
      if (sortType === 'releaseDateN') return a.releaseDate < b.releaseDate ? 1 : -1;
      if (sortType === 'releaseDateO') return a.releaseDate < b.releaseDate ? -1 : 1;
    })

    displayGames(sortedGames);
  }

  function displayGames(games) {
    gamesContainer.textContent = "";

    games.forEach(game => {
      const gameContent = `
      <div class="game-container">
      <img src="${game.imgURL}">
      <div class="rating"></div>
      </div>
      `
      gamesContainer.innerHTML += gameContent;
    })
  }

  formContainer.addEventListener('input', () => sortGames(games));
}

  // TODO
  // Collect genres
  // Collet ratings from metacritic
  // Generate random ratings and update color
  // Create loading animation?

  //SORT
  // Year (ascending and descending)
  // Name (ascending and descending)

  // FILTER
  // Multiplayer

  // SEARCH

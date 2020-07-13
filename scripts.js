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
  const releastDateUl = document.querySelector('.release-date-ul'); 

  displayGameYears(collectGameYears(games));
  displayGames(sortGames(games));

  function collectGameYears(games) {
    const gameYears = games.reduce((years, game) => {
      if (years.indexOf(game.releaseDate) === -1) {
        years.push(game.releaseDate);
      }
      return years
    }, []);

    return gameYears.sort((a, b) => a < b ? 1 : -1);
  }

  function displayGameYears(gameYears) {
    gameYears.forEach(year => {
      const yearLi = `
      <li>
        <label for="${year}">${year}</label>
        <input type="checkbox" id="${year}" name="${year}" value="${year}">
      </li>`

      releastDateUl.innerHTML += yearLi;
    })
  }

  function sortGames(games) {
    const sortType = sortInput.value;

    const sortedGames = games.sort((a, b) => {
      if (sortType === 'nameA') return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
      if (sortType === 'nameD') return a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1;
      if (sortType === 'releaseDateN') return a.releaseDate < b.releaseDate ? 1 : -1;
      if (sortType === 'releaseDateO') return a.releaseDate < b.releaseDate ? -1 : 1;
    })

    return sortedGames
  }

  function filterGames(games, year) {
    return games.filter(game => game.releaseDate === year);
  }

  function displayGames(games) {
    gamesContainer.textContent = "";

    games.forEach(game => {
      console.log(game);
      const gameContent = `
      <div class="game-container">
      <img src="${game.imgURL}">
      <div class="rating"></div>
      </div>
      `
      gamesContainer.innerHTML += gameContent;
    })
  }

  formContainer.addEventListener('input', (e) => {
    const year = Number(e.target.value);
    const checked = e.target.checked;

    if (checked) {
      displayGames(filterGames(games, year));
    } else {
      displayGames(games);
    }
  });
}
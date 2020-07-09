fetch('games.json').then((response) => { 
  return response.json();
}).then((json) => {
  games = json;
  initialize(games);
}).catch((err) => {
  console.log('Fetch problem: ' + err.message); 
});

function initialize(games) {
  displayGames(sortGamesByName(games));
}

const formContainer = document.querySelector('.form-container');
let gamesContainer = document.querySelector('.games-container');

function displayGames(games) {
  gamesContainer.textContent = "";
  
  games.forEach(game => {
    
    const gameContent = `
    <div class="game-container">
    <img src="${game.imgURL}">
    <div class="rating">68</div>
    </div>
    `
    gamesContainer.innerHTML += gameContent;
  })
}

function sortGamesByName(games) {
  return games.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return nameA > nameB ? 1 : -1;
  })
}

function sortGamesByYear(games) {
  return games.sort((a, b) => {
    return a.releaseDate > b.releaseDate ? -1 : 1;
  })
}

function filterByMulti(games) {
  return games.filter(game => game.multiplayer);
}

formContainer.addEventListener('input', (e) => {
  let val = e.target.value;
  if (val === 'releaseDate') return displayGames(sortGamesByYear(GAMESSPLICE));
  if (val === 'name' || val === 'all') return displayGames(sortGamesByName(GAMESSPLICE));
  if (val === 'multi') return displayGames(filterByMulti(GAMESSPLICE));
});


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

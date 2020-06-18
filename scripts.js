const GAMES = [
  {name: "DayZ", imgURL: "http://store-images.s-microsoft.com/image/apps.29273.69886306496288395.9772e69a-b6b4-4e4e-b921-787e4783bd7d.596454ff-8c18-42f6-93ba-3c0dd66b5c6f", multiplayer: "true", platforms: "Console", releaseDate: 2019},
  {name: "No Man's Sky", imgURL: "http://store-images.s-microsoft.com/image/apps.43766.68818099466568894.b5dbdbb3-af0f-4e39-9e76-c64290e2491c.f9abc4d2-745d-4e0c-8c63-09f47e3498e4", multiplayer: "true", platforms: "Console", releaseDate: 2018},
  {name: "Golf With Your Friends", imgURL: "http://store-images.s-microsoft.com/image/apps.26910.13908316754263937.5c54bde2-f9c8-4fbc-a7d0-4f022b0e27ed.2f31913e-0a1e-439f-b737-c77749597226", multiplayer: "true", platforms: "Console", releaseDate: 2020},
  {name: "Dungeon of the Endless", imgURL: "http://store-images.s-microsoft.com/image/apps.13086.70707872093786224.58adb10f-6fa7-4153-833e-94c396f216b6.3001f4b4-6141-4a09-930c-e6980e7fcd51", multiplayer: "true", platforms: "Console", releaseDate: 2016},
]

const gamesContainer = document.querySelector('.games-container');

GAMES.forEach( game => {
  const gameContent = `
    <div class="game-container">
    <img src="${game.imgURL}">
    <h2 class="game-name">
      ${game.name}
    </h2>
      
    </div>
  `
  gamesContainer.innerHTML += gameContent;

})
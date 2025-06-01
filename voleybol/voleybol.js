const voleybolContainer = document.getElementById("voleybol-container");

fetch("https://api-volleyball.p.rapidapi.com/games/h2h?h2h=7-8", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "api-volleyball.p.rapidapi.com",
    "x-rapidapi-key": "apiKey" // Your api key
  }
})
.then(response => response.json())
.then(data => {
  const games = data.response || [];
  games.forEach(game => {
    const div = document.createElement("div");
    div.className = "game";
    div.textContent = `${game.teams?.home?.name} vs ${game.teams?.away?.name}`;
    voleybolContainer.appendChild(div);
  });
})
.catch(err => console.error("Voleybol verisi alınamadı / Failed to fetch volleyball data:", err));
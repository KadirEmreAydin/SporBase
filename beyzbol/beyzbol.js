fetch("https://baseball4.p.rapidapi.com/v1/mlb/games-matrix?gamePk=633282", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "baseball4.p.rapidapi.com",
    "x-rapidapi-key": "apiKey" // Your api key
  }
})
.then(response => response.json())
.then(data => {
  console.log("Beyzbol Verisi / Baseball Data:", data);

  const container = document.getElementById("beyzbol-container");

  if (data && data.games) {
    data.games.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.classList.add("game");
      gameDiv.textContent = `${game.home_team} vs ${game.away_team}`;
      container.appendChild(gameDiv);
    });
  } else {
    container.innerHTML = "<p>Veri bulunamadı / No data found.</p>";
  }
})
.catch(error => {
  console.error("Hata oluştu / Error occurred:", error);
});

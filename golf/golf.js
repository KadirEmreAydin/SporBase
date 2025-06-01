fetch("https://golf-leaderboard-data.p.rapidapi.com/scorecard/220/101017", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "golf-leaderboard-data.p.rapidapi.com",
    "x-rapidapi-key": "apiKey" // Your api key
  }
})
.then(response => response.json())
.then(data => {
  console.log("Golf Verisi / Golf Data:", data);

  const container = document.getElementById("golf-container");

  if (data && data.data && data.data.players) {
    data.data.players.forEach(player => {
      const playerDiv = document.createElement("div");
      playerDiv.classList.add("player");
      playerDiv.textContent = `${player.player_name}: ${player.total}`;
      container.appendChild(playerDiv);
    });
  } else {
    container.innerHTML = "<p>Veri yok / No data available.</p>";
  }
})
.catch(error => {
  console.error("Hata oluştu / Error occurred:", error);
});

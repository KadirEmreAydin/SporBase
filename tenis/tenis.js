fetch("https://tennis-live-data.p.rapidapi.com/matches-by-event/27552", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "tennis-live-data.p.rapidapi.com",
    "x-rapidapi-key": "apiKey"  // Your api key
  }
})
.then(response => response.json())
.then(data => {
  console.log("Tenis Verisi / Tennis Data:", data);

  const container = document.getElementById("tenis-container");

  if (data.results && data.results.length > 0) {
    data.results.forEach(match => {
      const matchElement = document.createElement("div");
      matchElement.classList.add("match");
      matchElement.textContent = `${match.teams[0].name} vs ${match.teams[1].name}`;
      container.appendChild(matchElement);
    });
  } else {
    container.innerHTML = "<p>Maç verisi bulunamadı / No match data found.</p>";
  }
})
.catch(error => {
  console.error("Hata oluştu / Error occurred:", error);
});

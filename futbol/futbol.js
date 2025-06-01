const futbolContainer = document.getElementById("futbol-container");

fetch("https://allsportsapi2.p.rapidapi.com/api/team/2829/tournament/8/season/61643/goal-distributions", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "allsportsapi2.p.rapidapi.com",
    "x-rapidapi-key": "apiKey"// Your api key
  }
})
.then(response => response.json())
.then(data => {
  const dist = data.goalDistribution || {};
  const div = document.createElement("div");
  div.className = "distribution";
  div.textContent = `İlk Yarı: ${dist.firstHalf || 'Yok'} - İkinci Yarı: ${dist.secondHalf || 'Yok'} / First Half: ${dist.firstHalf || 'N/A'} - Second Half: ${dist.secondHalf || 'N/A'}`;
  futbolContainer.appendChild(div);
})
.catch(err => console.error("Futbol verisi alınamadı / Failed to fetch football data:", err));

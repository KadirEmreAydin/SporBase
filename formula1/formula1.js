const f1Container = document.getElementById("formula1-container");

fetch("https://api-formula-1.p.rapidapi.com/rankings/startinggrid?race=50", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
    "x-rapidapi-key": "apiKey" // Your api key
  }
})
.then(response => response.json())
.then(data => {
  const drivers = data.response || [];
  drivers.forEach(driver => {
    const div = document.createElement("div");
    div.className = "driver";
    div.textContent = `${driver.driver?.name} - ${driver.team?.name}`;
    f1Container.appendChild(div);
  });
})
.catch(err => console.error("F1 verisi alınamadı / Failed to fetch F1 data:", err));
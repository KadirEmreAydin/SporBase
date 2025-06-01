document.addEventListener("DOMContentLoaded", function () {
  console.log("Sayfa yüklendi. / Page loaded.");

  // Genel veri çekme fonksiyonu
  // Generic data fetch function
  async function fetchData(url, options = {}) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Sunucudan geçerli bir yanıt alınamadı. / Server did not respond properly.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Veri alınamadı: / Failed to fetch data:", error);
    }
  }

  const futbolAPIUrl = "https://allsportsapi2.p.rapidapi.com/api/team/2829/tournament/8/season/61643/goal-distributions";
  const futbolAPIOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "allsportsapi2.p.rapidapi.com",
      "x-rapidapi-key": "apiKey" // Your api key
    }
  };

  fetchData(futbolAPIUrl, futbolAPIOptions).then(data => {
    console.log("Futbol verileri / Football data:", data);
  });

});

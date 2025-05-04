document.addEventListener("DOMContentLoaded", () => {
    const quoteContainer = document.getElementById("quote-container");
  
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        quoteContainer.textContent = `"${data.content}" — ${data.author}`;
      })
      .catch(error => {
        quoteContainer.textContent = "Failed to load quote.";
        console.error(error);
      });
  
    document.getElementById("stocksBtn").addEventListener("click", () => {
      window.location.href = "stocks.html";
    });
  
    document.getElementById("dogsBtn").addEventListener("click", () => {
      window.location.href = "dogs.html";
    });
  });
  
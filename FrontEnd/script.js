const URL = "http://127.0.0.1:5001";

// 1. Fetch and Render Movies (GET)
async function displayMovies() {
    const response = await fetch(`${URL}/movies`);
    const data = await response.json();
    renderUI(data.products);
}

// 2. Add to Watchlist (POST)
async function addToWatchlist(movie) {
    const response = await fetch(`${URL}/watchlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie)
    });
    const result = await response.json();
    alert(result.message);
}

function renderUI(arr) {
    const root = document.getElementById("root");
    root.innerHTML = ""; // Clear previous content
    arr.forEach(movie => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${movie.thumbnail}" />
            <h4>${movie.title}</h4>
            <button onclick='addToWatchlist(${JSON.stringify(movie)})'>+ Watchlist</button>
        `;
        root.appendChild(card);
    });
}

displayMovies();
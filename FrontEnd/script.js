const URL = "http://127.0.0.1:5001";

// 1. Fetching data (GET) - You already have this working!
async function getProducts() {
    try {
        const response = await fetch(`${URL}/products`);
        const data = await response.json();
        renderUI(data.products);
    } catch (error) {
        console.log("Error: Backend is not running on port 5001");
    }
}

// 2. NEW: Sending data to the Backend (POST - FS 20)
async function addToWatchlist(movie) {
    try {
        const response = await fetch(`${URL}/watchlist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie) // Converting JS object to JSON string
        });
        
        const result = await response.json();
        alert(result.message); // Shows a popup saying "Movie Added!"
        
    } catch (error) {
        console.error("Failed to add to watchlist:", error);
    }
}

// 3. Updated UI rendering to include the button
function renderUI(arr) {
    const root = document.getElementById("root");
    root.innerHTML = ""; 
    
    arr.forEach((item) => {
        const card = document.createElement("div");
        card.style.border = "1px solid black"; 
        card.style.padding = "10px";
        card.style.margin = "10px";
        
        card.innerHTML = `
            <img src="${item.thumbnail}" width="200px" />
            <h3>${item.title}</h3>
            <p>Rating: ${item.rating}</p>
            <button id="btn-${item.id}">+ Add to Watchlist</button>
        `;
        root.appendChild(card);

        // Attach event listener (From your FS 16 - Events notes)
        document.getElementById(`btn-${item.id}`).addEventListener("click", () => {
            addToWatchlist(item);
        });
    });
}

getProducts();
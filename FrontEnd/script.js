<<<<<<< HEAD
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
=======
const products = [
   {
       title: "Bag",
       price: "$200",
       rating: 4.2,
       thumbnail: "https://images.jdmagicbox.com/quickquotes/images_main/sara-30-liters-polyester-black-school-bag-black-178207114-ksaft.jpg",
   },
   {
       title: "Mat",
       price: "$100",
       rating: 3.9,
       thumbnail: "https://rukminim2.flixcart.com/image/480/640/l58iaa80/mat/z/t/w/medium-natural-korai-grass-sleeping-mat-3-5-x-6-feet-river-grass-original-imagfyhgq4jvgmrg.jpeg?q=90",
   },
];




function main(arr) {
   	for (let i = 0; i < arr.length; i++) {
       	const newCard = document.createElement("div");
       	newCard.className = "card";
       	newCard.innerHTML = `
       		<img src="${arr[i].thumbnail}" />
       		<div class="product-info">
           			<h4> ${arr[i].title} </h4>
          		 	<p>Price: ${arr[i].price} </p>
          		 	<p>Rating: ${arr[i].rating} ⭐️</p>
       		</div>
   		`;
       	const root = document.getElementById("root");
       	root.appendChild(newCard);
   	}


}


main(products);
>>>>>>> 0e7631260cf33ca4c4a1951da3d850a45eef141c

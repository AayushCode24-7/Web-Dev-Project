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
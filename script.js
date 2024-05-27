const products = [
	{
		id: 1,
		name: "Смартфон",
		price: 29999,
		description: "Мощный и стильный смартфон с отличной камерой.",
		image: "smartphone.jpg",
		category: "electronics",
	},
	{
		id: 2,
		name: "Ноутбук",
		price: 59999,
		description: "Высокопроизводительный ноутбук для работы и игр.",
		image: "laptop.jpg",
		category: "electronics",
	},
	{
		id: 3,
		name: "Кофеварка",
		price: 4999,
		description: "Современная кофеварка для идеального эспрессо.",
		image: "coffeemaker.jpg",
		category: "appliances",
	},
	{
		id: 4,
		name: "Телевизор",
		price: 39999,
		description: "Ультратонкий телевизор с 4K разрешением.",
		image: "tv.jpg",
		category: "electronics",
	},
	{
		id: 5,
		name: "Микроволновка",
		price: 7999,
		description: "Компактная микроволновка с множеством функций.",
		image: "microwave.jpg",
		category: "appliances",
	},
	{
		id: 6,
		name: "Микроволновка",
		price: 8999,
		description: "Компактная микроволновка с множеством функций.",
		image: "microwave.jpg",
		category: "appliances",
	},
];

const productGrid = document.querySelector(".product-grid");
const sortSelect = document.getElementById("sort");

function displayProducts(products) {
	productGrid.innerHTML = "";
	products.forEach((product) => {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		productCard.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>Цена: ${product.price} руб.</p>
      `;

		productGrid.appendChild(productCard);
	});
}

function sortProducts(criteria) {
	let sortedProducts = [...products];
	if (criteria === "priceAsc") {
		sortedProducts.sort((a, b) => a.price - b.price);
	} else if (criteria === "priceDesc") {
		sortedProducts.sort((a, b) => b.price - a.price);
	} else if (criteria === "nameAsc") {
		sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
	} else if (criteria === "nameDesc") {
		sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
	}
	displayProducts(sortedProducts);
}

sortSelect.addEventListener("change", () => {
	const criteria = sortSelect.value;
	sortProducts(criteria);
});

displayProducts(products);

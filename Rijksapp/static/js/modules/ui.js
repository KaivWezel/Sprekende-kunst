import * as api from "./api.js";

const results = document.querySelector("#results ul");

export const createList = async () => {
	console.log("submitted form");
	results.innerHTML = "";

	const artworks = await api.getResults();
	console.log("results", artworks);
	artworks.forEach((art) => {
		createCard(art);
	});
};

const createCard = async (art) => {
	// Get details for card
	const item = await api.getDetails(art);
	const details = item.artObject;
	console.log(details);

	// Create card element
	const card = document.createElement("article");
	card.classList.add("artCard");
	const image = document.createElement("img");
	const title = document.createElement("h3");
	const subtitle = document.createElement("h4");
	const description = document.createElement("p");

	// Assign content to elements
	image.src = art.webImage.url;
	title.innerText = details.title;
	subtitle.innerText = details.longTitle;
	description.innerText = details.label.description;

	// Append elements to card
	card.appendChild(image);
	card.appendChild(title);
	card.appendChild(subtitle);
	card.appendChild(description);

	// Append card to list
	console.log(results);
	results.appendChild(card);
};

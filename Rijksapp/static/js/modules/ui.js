import * as api from "./api.js";

const results = document.querySelector("#results ul");
const loader = document.querySelector(".loader");

export const renderResult = async () => {
	const artworks = await api.getResults();
	loader.classList.add("active");
	// Create card for each artwork
	if (artworks.length > 0) {
		for (const art of artworks) {
			const card = await createCard(art);
			append(results, card);
		}
	}
	loader.classList.remove("active");
};

const createCard = async (art) => {
	// Get details for card
	const details = await api.getDetails(art);
	console.log("got details");

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
	console.log("card complete");

	// Append card to list
	return card;
};

const append = (parent, component) => {
	parent.appendChild(component);
};

import * as api from "./api.js";

const results = document.querySelector("#results ul");

export const renderResult = async () => {
	const artworks = await api.getResults();
	console.log("results received");
	// Create card for each artwork
	for (const art of artworks) {
		const card = await createCard(art);
		append(card);
	}
};

//fetcht results
// loop over results
// create card for result
// Append card to list

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

const append = (component) => {
	console.log("componentn", component);
	results.appendChild(component);
};

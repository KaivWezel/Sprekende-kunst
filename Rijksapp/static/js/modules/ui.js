import * as api from "./api.js";

const resultsList = document.querySelector("#results ul");
const loader = document.querySelector(".loader");

export const renderPage = (hash) => {
	const page = document.querySelector(hash);
	page.classList.add("activePage");
};

export const renderResult = async () => {
	resultsList.innerHTML = "";
	const results = await api.getResults();
	renderList(results);
};

export const renderNextPage = async () => {
	const results = await api.nextPage();
	renderList(results);
};

const renderList = async (results) => {
	const artworks = results.artObjects;
	loader.classList.add("active");
	// Create card for each artwork
	if (artworks.length > 0) {
		for (const art of artworks) {
			const card = await createCard(art);
			append(resultsList, card);
		}
	} else {
		const errorMsg = document.createElement("h3");
		errorMsg.innerText = "Geen resultaten gevonden";
		append(resultsList, errorMsg);
	}
	loader.classList.remove("active");
};

const createCard = async (art) => {
	// Get details for card
	const details = await api.getDetails(art);

	// Create card element
	const card = document.createElement("article");
	card.classList.add("artCard");
	const image = document.createElement("img");
	const title = document.createElement("h3");
	const subtitle = document.createElement("h4");
	const description = document.createElement("p");

	// Assign content to elements
	image.src = art.webImage ? art.webImage.url : "";

	title.innerText = details.title ? details.title : "Geen titel beschikbaar";

	subtitle.innerText = details.longTitle ? details.longTitle : "";

	description.innerText = details.label.description
		? details.label.description
		: "Geen beschrijving beschikbaar";

	// Append elements to card
	card.appendChild(image);
	card.appendChild(title);
	card.appendChild(subtitle);
	card.appendChild(description);

	// Append card to list
	return card;
};

const append = (parent, component) => {
	parent.appendChild(component);
};

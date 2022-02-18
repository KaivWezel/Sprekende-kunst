console.log("check");

//URL variables
const url = `https://www.rijksmuseum.nl/api/nl/collection?key=vnkVfTSO&involvedMaker=Karel+Appel`;
const hostURL = new URL(url).hostname;
const pathURL = new URL(url).pathname;
const apiKey = "vnkVfTSO";

//DOM variables
const results = document.querySelector("ul");
const cultSelect = document.querySelector("#culture");
let culture = cultSelect.value;
const searchForm = document.querySelector(".searchForm");

searchForm.onsubmit = async function (e) {
	e.preventDefault();
	console.log("submitted form");

	const artworks = await getData();
	console.log("results", artworks);
	artworks.forEach((art) => {
		getDetails(art);
	});
	console.log();
};

// get data
// get details

getData();

// cultSelect.onchange = setCulture;

// Set language
function setCulture() {
	culture = cultSelect.value;
	console.log(culture);
}

async function getData() {
	// constructing query
	const queryURL = defineQuery();
	// constructing endpoint useing query
	const endpoint = generateEndpoint(queryURL);
	// Fetch to endpoint
	const artworks = await fetch(endpoint)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			return data.artObjects;
		});
	return artworks;
}

async function getDetails(art) {
	console.log(art);
	// Filter id
	const filteredId = art.id.split("").slice(3).join("");
	// Insert id into detail URL
	const endpoint = `https://${hostURL}${pathURL}/${filteredId}?key=${apiKey}`;
	console.log(endpoint);
	// Fetch details
	const details = await fetch(endpoint)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			return data;
		});
	return details;
}

function defineQuery() {
	// Defining inputs for query
	const queries = document.querySelectorAll(".searchForm input");
	// Declaring queryString for storage
	let queryString = [];
	// Reading input value
	queries.forEach(function (query) {
		if (query.value.length > 0) {
			// Store input value in queryString
			queryString.push(`${query.name}=${query.value}`);
		}
		query.value = "";
	});
	// Constructing final query
	const finalQuery = queryString.join("&").replace(/\s+/g, "+");
	return finalQuery;
}

function generateEndpoint(query) {
	const endpoint = `https://${hostURL}${pathURL}?key=${apiKey}&${query}`;
	return endpoint;
}

function renderCards() {
	// Create card element
	const card = document.createElement("div");
	card.classList.add("artCard");
	const image = document.createElement("img");
	const title = document.createElement("h3");
	// Assign content to elements
	// Append to list
}

renderCards();

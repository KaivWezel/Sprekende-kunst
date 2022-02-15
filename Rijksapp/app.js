console.log("check");

//URL variables
const url = `https://www.rijksmuseum.nl/api/nl/collection?key=vnkVfTSO&involvedMaker=Rembrandt+van+Rijn`;
const hostURL = new URL(url).hostname;
const pathURL = new URL(url).pathname;
const apiKey = "vnkVfTSO";

//DOM variables
const results = document.querySelector("ul");
const cultSelect = document.querySelector("#culture");
let culture = cultSelect.value;
const searchForm = document.querySelector(".searchForm");

searchForm.onsubmit = function (e) {
	e.preventDefault();
	console.log("submitted form");
	getData();
};

cultSelect.onchange = setCulture;

fetch(url)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data.artObjects);
		getAndRenderArt(data.artObjects);
	});

function getAndRenderArt(artList) {
	artList.forEach((art) => {
		const artCard = document.createElement("li");
		artCard.innerText = art.title;

		results.appendChild(artCard);
	});
}

function setCulture() {
	culture = cultSelect.value;
	console.log(culture);
}

function getData() {
	const queryURL = defineQuery();
	const endpoint = generateEndpoint(queryURL);
	console.log(endpoint);
}

function defineQuery() {
	const queries = document.querySelectorAll(".searchForm input");
	let queryString = [];
	queries.forEach(function (query) {
		if (query.value.length != 0) {
			queryString.push(`${query.name}=${query.value}`);
		}
		console.log(queryString);
		query.value = "";
	});
	const finalURL = queryString.join("&").replace(/\s+/g, "+");
	console.log(finalURL);
	return finalURL;
}

function generateEndpoint(query) {
	const endpoint = `${hostURL}${pathURL}?key=${apiKey}&${query}`;
	return endpoint;
}

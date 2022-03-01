import * as query from "./queries.js";

// URL constants
const url = `https://www.rijksmuseum.nl/api/nl/collection?key=vnkVfTSO&involvedMaker=Karel+Appel`;
const host = new URL(url).hostname;
const hostURL = `https://${host}`;
const pathURL = new URL(url).pathname;
const apiKey = "vnkVfTSO";
const sort = "relevance";

let currentURL = "";
// api functions
export const getResults = () => {
	// constructing query
	const queryURL = query.collectionQuery();
	// constructing endpoint useing query
	const endpoint = `${hostURL}${pathURL}?key=${apiKey}&${queryURL}&s=${sort}`;
	currentURL = endpoint;
	// Fetch to endpoint
	return fetch(endpoint)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			return data.artObjects;
		});
};

export const getDetails = async (art) => {
	const endpoint = query.DetailQuery(art);
	// Fetch details
	const details = await fetch(endpoint)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			return data;
		});
	return details.artObject;
};

import * as query from "./queries.js";

// URL constants
const url = `https://www.rijksmuseum.nl/api/nl/collection?key=vnkVfTSO&involvedMaker=Karel+Appel`;
const host = "https://www.rijksmuseum.nl";
const path = "/api/nl/collection";
const apiKey = "vnkVfTSO";
const sort = "relevance";

const currentQuery = {
	url: "",
	page: 1,
};

// api functions
export const getResults = () => {
	// constructing query
	currentQuery.page = 1;
	const queryURL = query.collectionQuery();
	// constructing endpoint useing query
	const endpoint = `${host}${path}?key=${apiKey}&p=${currentQuery.page}&${queryURL}&s=${sort}`;
	currentQuery.url = queryURL;
	// Fetch to endpoint
	const results = request(endpoint);
	return results;
};

export const getDetails = async (art) => {
	const endpoint = query.DetailQuery(art);
	// Fetch details
	const details = await request(endpoint);
	return details.artObject;
};

export const nextPage = () => {
	currentQuery.page++;
	const endpoint = `${host}${path}?key=${apiKey}&p=${currentQuery.page}&${currentQuery.url}&s=${sort}`;
	const results = request(endpoint);
	return results;
};

const request = (endpoint) => {
	return fetch(endpoint)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

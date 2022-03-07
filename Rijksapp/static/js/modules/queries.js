// Query definitions
const url = `https://www.rijksmuseum.nl/api/nl/collection?key=vnkVfTSO&involvedMaker=Karel+Appel`;
const host = new URL(url).hostname;
const hostURL = `https://${host}`;
const pathURL = new URL(url).pathname;
const apiKey = "vnkVfTSO";

// Collection Query for global search
export const collectionQuery = () => {
	// Defining inputs for query
	const queries = document.querySelectorAll(".searchForm input");
	// Declaring queryString for storage
	let queryString = [];
	// Reading input value
	queries.forEach((query) => {
		if (query.value.length != 0) {
			// Store input value in queryString
			queryString.push(`${query.name}=${query.value}`);
		}
		query.value = "";
	});
	// Constructing final query
	const finalQuery = queryString.join("&").replace(/\s+/g, "+");
	return finalQuery;
};

// Detail query for searching artworks
export const DetailQuery = (art) => {
	// filter id from art object
	const id = art.id.split("").slice(3).join("");
	// Create endpoint with id
	const endpoint = `${hostURL}${pathURL}/${id}?key=${apiKey}`;
	return endpoint;
};

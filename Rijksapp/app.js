console.log("check");

const url = `https://www.rijksmuseum.nl/api/nl/collection?key=vnkVfTSO&involvedMaker=Rembrandt+van+Rijn`;
const results = document.querySelector("ul");

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

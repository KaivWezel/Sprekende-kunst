import { renderPage } from "./ui.js";

// In principe kan deze functie ook in de hashchange, maar dit is om te laten zien dat ik het kan gebruiken.
export default () => {
	switch (location.hash) {
		case "#home":
			clearPage();
			renderPage(location.hash);
		case "#search":
			clearPage();
			renderPage(location.hash);
			break;
		case "#results":
			clearPage();
			renderPage(location.hash);
		default:
			break;
	}
};

const clearPage = () => {
	const pages = document.querySelectorAll("section");
	pages.forEach((page) => page.classList.remove("activePage"));
};

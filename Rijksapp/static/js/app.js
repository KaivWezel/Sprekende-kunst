import * as ui from "./modules/ui.js";

console.log("check");

//DOM variables
const results = document.querySelector("ul");
const cultSelect = document.querySelector("#culture");
let culture = cultSelect.value;
const searchForm = document.querySelector(".searchForm");

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	ui.createList(e);
});

// Set language
function setCulture() {
	culture = cultSelect.value;
	console.log(culture);
}

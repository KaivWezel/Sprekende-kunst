import * as ui from "./modules/ui.js";

console.log("check");

//DOM variables
const results = document.querySelector(".results");
const cultSelect = document.querySelector("#culture");
let culture = cultSelect.value;
const searchForm = document.querySelector(".searchForm");
const nextBtn = document.querySelector(".nextPage");

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	ui.renderResult();
});

// Set language
function setCulture() {
	culture = cultSelect.value;
	console.log(culture);
}

nextBtn.addEventListener("click", (e) => {
	e.preventDefault();
	ui.renderResult();
});

// Nextbutton pressed
// increase pagination for api
// fetch next results
// create cards for next results
//

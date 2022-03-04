import * as ui from "./modules/ui.js";

console.log("app connected");

//DOM variables
const searchForm = document.querySelector(".searchForm");
const nextBtn = document.querySelector(".nextPage");
const loader = document.querySelector(".loader");

window.addEventListener("hashchange", (e) => {
	//filter hash from url
	// give hash to router
	console.log(e.oldURL, e.newURL);
});

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	ui.renderResult();
});

nextBtn.addEventListener("click", (e) => {
	e.preventDefault();
	ui.renderResult();
});

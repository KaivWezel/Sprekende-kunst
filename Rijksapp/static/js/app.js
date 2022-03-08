import * as ui from "./modules/ui.js";
import Router from "./modules/router.js";

console.log("app connected");

//DOM variables
const searchForm = document.querySelector(".searchForm");
const searchBtn = document.querySelector(".searchFrom a");
const nextBtn = document.querySelector(".nextPage");
const loader = document.querySelector(".loader");

window.addEventListener("hashchange", (e) => {
	// give router location
	Router(location.hash);
});

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	window.location.hash = "results";
	ui.renderResult();
});

nextBtn.addEventListener("click", (e) => {
	e.preventDefault();
	ui.renderNextPage();
});

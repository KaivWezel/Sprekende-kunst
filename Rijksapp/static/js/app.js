import * as ui from "./modules/ui.js";

console.log("app connected");

//DOM variables
const searchForm = document.querySelector(".searchForm");
const nextBtn = document.querySelector(".nextPage");

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	ui.renderResult();
});

nextBtn.addEventListener("click", (e) => {
	e.preventDefault();
	ui.renderResult();
});

// Nextbutton pressed
// increase pagination for api
// fetch next results
// create cards for next results
//

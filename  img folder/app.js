const arrows = document.querySelectorAll(" arrow");
const movielists = document.querySelectorAll(" movie-list");
arrows. forEach((arrow,
i) => {
const itemNumber = movieLists[i].querySelectorAll("img").length;
let clickCounter
arrow. addEventListener("click", () → {
clickCounter++; if (itemNumber
(4 + clickCounter) >= 0) {
movielists[i].style.transform =
translatex(${
movieLists[i].computedStyleMap() -get ("transform")[0].x.value - 300
Jpx)';
} else
movieLists[i].style.transform -
"translateX(0)";
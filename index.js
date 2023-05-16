import { createCharacterCard } from "./components/card/card.js";
import {
  createButton,
  pagination,
} from "./components/nav-button/nav-button.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

// States
export let maxPage = 1;
export let page = 1;
export let searchQuery = "";

// get data from the api
export async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      cardContainer.innerHTML = "";
      data.results.forEach((character) => {
        const newCharacter = createCharacterCard(
          character.image,
          character.name,
          character.status,
          character.type,
          character.episode.length
        );
        cardContainer.append(newCharacter);
      });
      //update the pagination because we only have access to the newst page and maxPage in index.js
      pagination.textContent = `${page} / ${maxPage}`;
    }
  } catch (error) {
    console.error("An error occurred");
  }
}

//declare the prev button function
const clickButtonPrev = function () {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
};
//declare the next button function
const clickButtonNext = function () {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
};
createButton(clickButtonPrev, clickButtonNext);

//declare submit function
const submitFunction = function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  fetchCharacters();
};
createSearchBar(submitFunction);

fetchCharacters();

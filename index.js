import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
export let navigation = document.querySelector('[data-js="navigation"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
export let maxPage = { value: 1 };
export let page = { value: 1 };
export let searchQuery = "";

export async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page.value}&name=${searchQuery}`
    );
    if (response.ok) {
      const data = await response.json();
      maxPage.value = data.info.pages;
      console.log(data.results);
      cardContainer.innerHTML = "";
      data.results.forEach((character) => {
        const newCharacter = createCharacterCard(
          character.image,
          character.name,
          character.status,
          character.type,
          character.episode.length
        );
        console.log(character);
        cardContainer.append(newCharacter);
      });
      updatePageNumbers();
    }
  } catch (error) {
    console.error("An error occurred");
  }
}

function updatePageNumbers() {
  pagination.textContent = `${page.value} / ${maxPage.value}`;
}

fetchCharacters();
createButton();
createSearchBar();

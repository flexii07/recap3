import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
// States
let maxPage = 1;
let page = 1;
let searchQuery = "";
async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      console.log(data.results);
      // const characters = data.results;
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
nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});
function updatePageNumbers() {
  pagination.textContent = `${page} / ${maxPage}`;
}

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  fetchCharacters();
  console.log(data);
});
fetchCharacters();

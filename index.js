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
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character?page=1"
    );
    if (response.ok) {
      const data = await response.json();
      const characters = data.results;
      return characters;
    }
  } catch (error) {
    console.error("An error occurred");
  }
}

async function displayCharacters() {
  try {
    const characters = await fetchCharacters();
    cardContainer.innerHTML = ""; // Clear existing cards
    characters.forEach((character) => {
      const card = createCharacterCard(
        character.image,
        character.name,
        character.status,
        character.type,
        character.episode.length
      );
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("An error occurred");
  }
}
displayCharacters();

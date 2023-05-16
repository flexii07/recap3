import { searchBarContainer } from "../../index.js";

export function createSearchBar(submitFunction) {
  const form = document.createElement("form");
  form.classList.add("search-bar");
  form.setAttribute("data-js", "search-bar");
  form.setAttribute("action", "");
  searchBarContainer.append(form);
  //add the submit event to form
  form.onsubmit = submitFunction;

  const input = document.createElement("input");
  input.classList.add("search-bar__input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "search characters");
  input.setAttribute("aria-label", "character name");
  input.setAttribute("name", "query");
  form.append(input);

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");
  form.append(button);

  const img = document.createElement("img");
  img.classList.add("search-bar__icon");
  img.setAttribute("src", "assets/magnifying-glass.png");
  img.setAttribute("alt", "");
  button.append(img);
}

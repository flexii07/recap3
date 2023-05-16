import { navigation, page, maxPage, fetchCharacters } from "../../index.js";
import { createPagination } from "../nav-pagination/nav-pagination.js";

export function createButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.textContent = "previous";
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.onclick = prevButtonClick;

  const pagination = createPagination();

  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.textContent = "next";
  nextButton.setAttribute("data-js", "button-next");
  nextButton.onclick = nextButtonClick;

  navigation.append(prevButton, pagination, nextButton);
}

function nextButtonClick() {
  if (page.value < maxPage.value) {
    page.value++;
    fetchCharacters();
  }
}

function prevButtonClick() {
  if (page.value > 1) {
    page.value--;
    fetchCharacters();
  }
}


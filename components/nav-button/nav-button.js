import { createPagination } from "../nav-pagination/nav-pagination.js";

let navigation = document.querySelector('[data-js="navigation"]');

//export the pagination element, so that we can use it in the index.js
export const pagination = createPagination();
export function createButton(prevButtonFunction, nextButtonFunction) {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.textContent = "previous";
  prevButton.setAttribute("data-js", "button-prev");
  //add click event to prev button
  prevButton.onclick = prevButtonFunction;
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.textContent = "next";
  nextButton.setAttribute("data-js", "button-next");
  //add click event to next button
  nextButton.onclick = nextButtonFunction;
  navigation.append(prevButton, pagination, nextButton);
}

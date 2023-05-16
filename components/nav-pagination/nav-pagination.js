export function createPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.textContent = "1 / 1";
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  
  return pagination;
}

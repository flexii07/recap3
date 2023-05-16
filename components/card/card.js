/* test */
export function createCharacterCard(
  imageSource,
  name,
  status,
  type,
  occurences
) {
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `<div class="card__image-container"><img class="card__image" src="${imageSource}" alt="Rick Sanchez"/>
    <div class="card__image-gradient"></div></div>
  <div class="card__content">
    <h2 class="card__title">${name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">status</dt>
      <dd class="card__info-description">${status}</dd>
      <dt class="card__info-title">type</dt>
      <dd class="card__info-description">${type}</dd>
      <dt class="card__info-title">occurrences</dt>
      <dd class="card__info-description">${occurences}</dd>
    </dl>
  </div>`;
  return li;
}

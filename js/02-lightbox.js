import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" loading="lazy"/>
      </a>
    </li>
  `;
  galleryContainer.insertAdjacentHTML("beforeend", galleryItem);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});

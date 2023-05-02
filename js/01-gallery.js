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
galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
});
const gallery = document.querySelector(".gallery");
const lightbox = basicLightbox.create(
  `
    <img src="" width="800" height="600">
`
);

let currentImage = null;

gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const imageUrl = event.target.dataset.source;
    lightbox.element().querySelector("img").setAttribute("src", imageUrl);
    lightbox.show();
    currentImage = lightbox;
    document.body.classList.add("modal-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && currentImage && currentImage.visible()) {
    currentImage.close();
    currentImage = null;
    document.body.classList.remove("modal-open");
  }
});

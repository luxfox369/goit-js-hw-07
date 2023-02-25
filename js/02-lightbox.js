import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
//створимо масив розмітки де кожен ел-т це [<a><img/>....</a>] і зєднаємо все в 1 рядок
let markUp = galleryItems
    .map(({ preview,original,description }) => 
    `<a class="gallery__item" href = ${original} >
        <img
        class="gallery__image"
        src=${preview}
        alt=${description}
        />
     </a>` )
    .join("");
 //console.log("markUp ",markUp);
const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = markUp;

galleryRef.addEventListener("click", onClick);

function onClick(event) {
  consol.log(event.target);
  let gallery = new SimpleLightbox('.gallery a', { captionsData: event.target.alt , captionDelay: 250 });
  gallery.on('show.simplelightbox', function () {
    //if (event.target.nodName === "A")
      event.preventDefault();
    //    if (!event.target.classList.contains("gallery__image")) {
    //      return;
    // }
  });
};
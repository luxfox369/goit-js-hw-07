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
const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = markUp;

galleryRef.addEventListener("click", onContainerClick);

function onContainerClick(event) {
      event.preventDefault();
    let gallery = new SimpleLightbox('.gallery a', { showCounter:false,captionsData:'alt' , captionDelay: 250 ,});
    gallery.on('show.simplelightbox', function () {
      
  });
};
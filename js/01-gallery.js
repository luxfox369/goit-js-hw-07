import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);
//створимо масив розмітки де кожен ел-т це [<a><img/>....</a>] і зєднаємо все в 1 рядок
let markUp = galleryItems
    .map(({ preview, original, description }) => 
    `<div uk-lightbox class="gallery__item"> 
     <a class="gallery__link" href = ${original} >
        <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
        />
     </a>
     </div>
    ` )
    .join("");
const galleryRef = document.querySelector(".gallery");
//console.log("markUp ",markUp);
galleryRef.innerHTML = markUp;

galleryRef.addEventListener("click", showOriginal);
let instance = {};
function showOriginal(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")){
         return; 
    }
    // import * as basicLightbox from 'basiclightbox'
    instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">`);
    instance.show();
     console.log("після створення ",instance.visible());
     console.log("після створення ",instance.element());  
};

galleryRef.addEventListener("keydown", (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
        instance.close();
    }
    console.log("після escape ",instance.visible());//чому далі true ???????
    console.log("після escape ",instance.element());//далі true 
});
import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
function createMarkup(arr) {
    const markup = arr.map(({ preview, original, description }) => `<li class='gallery__item js-gallery__item'>
    <a class='gallery__link' href ="${original}"> 
    <img class="gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>
    </li>`).join("")  
    container.insertAdjacentHTML("beforeend", markup)
}
createMarkup(galleryItems)

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(lightbox);
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   }

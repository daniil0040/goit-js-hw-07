import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `<li class='gallery__item js-gallery__item'>
    <a class='gallery__link default' href ="${original}"> 
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a>
    </li>`).join("")
//     let markup = ``;
//     for (let i = 0; i < arr.length; i += 1) {
//     markup += `<li class='gallery__item js-gallery__item'>
//   <a class='gallery__link' href ="${arr[i].original}"> 
//   <img class="gallery__image"
//       src="${arr[i].preview}"
//       data-source="${arr[i].original}"
//       alt="${arr[i].description}"/>
//   </a>
//     </li>`  
//     }
}



container.addEventListener("click", hendlerClick)
function hendlerClick(evt) {
    // evt.preventDefault()
    if (!evt.target.classList.contains("js-gallery__item")) {
        return
    }
    const url = evt.target.firstElementChild.getAttribute("href")
    const instance = basicLightbox.create(`
    <img src="${url}"/>
`)
    instance.show()
document.addEventListener("keydown",closeModal)
    function closeModal(evt) {
        if (!evt.keyCode === "Escape") {
            return
        }
        instance.close()
        document.removeEventListener("keydown",closeModal)
    }
}
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   }

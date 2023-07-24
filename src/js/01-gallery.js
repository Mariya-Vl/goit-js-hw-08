// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryHtml = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery">
    <a href="${original}"><img src="${preview}" alt="${description}" title="${description}" width="600"/></a>
    </div>`;
    })
    .join('');
}

// додаємо розмітку галереї до DOM дерева:
galleryHtml.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {close: false});
gallery.on('show.simplelightbox');
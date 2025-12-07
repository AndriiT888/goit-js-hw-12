import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery'); 
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><span class="item-descr-item">Likes:</span> ${likes}</p>
          <p><span class="item-descr-item">Views:</span> ${views}</p>
          <p><span class="item-descr-item">Comments:</span> ${comments}</p>
          <p><span class="item-descr-item">Downloads:</span> ${downloads}</p>
        </div>
      </li>`;
      }
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// твій loader працює ТІЛЬКИ через class on body
export function showLoader() {
  document.body.classList.add('loading');
}

export function hideLoader() {
  document.body.classList.remove('loading');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

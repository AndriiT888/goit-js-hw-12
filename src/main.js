import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector(".load-more");
const gallery = document.querySelector(".gallery");

let currentQuery = "";
let currentPage = 1;
let totalHits = 0;
const PER_PAGE = 15;


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search query.",
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();

  currentQuery = query;
  currentPage = 1;

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      hideLoader();
      return;
    }

    createGallery(data.hits);

    if (PER_PAGE < totalHits) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong! Try again later.",
    });
  } finally {
    hideLoader();
  }
});


loadMoreBtn.addEventListener("click", async () => {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

 
    smoothScroll();

   

    if (currentPage * PER_PAGE >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      hideLoadMoreButton();
      return;
    }

    showLoadMoreButton();
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong!",
    });
  } finally {
    hideLoader();
  }
});



function smoothScroll() {
  const card = gallery.querySelector(".gallery-item");
  if (!card) return;
  const { height: cardHeight } = card.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });
}

import { pixabayApi } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';
import { imgBoxLight } from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
const fetchPostsBtn = document.querySelector('.btn');
const form = document.querySelector('.find-form');
const imagePlace = document.querySelector('.galleriesBox');
const loader = document.querySelector('.loader');
let page = 1;
let findText = '';
form.addEventListener('submit', event => {
  event.preventDefault();

  imagePlace.innerHTML = '';

  const formData = new FormData(form);
  findText = formData.get('find-text');
  if (findText === '') {
    return;
  }
  imagePlace.innerHTML = `<div class="loader"></div>`;
  pixabayApi(findText, page)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        imagePlace.innerHTML = '';
        return;
      }
      const markup = imagesRender(data.hits);
      imagePlace.innerHTML = markup;
      imgBoxLight();
    })
    .catch(error =>
      iziToast.error({
        position: 'topRight',
        message: 'Error',
      })
    )
    .finally(() => {
      event.target.reset();
    });
});

import axios from 'axios';
fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await pixabayApi(findText, page);
    const markup = imagesRender(data.hits);
    imagePlace.innerHTML = markup;
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = 'Fetch more posts';
    }
  } catch (error) {
    console.log(error);
  }
});

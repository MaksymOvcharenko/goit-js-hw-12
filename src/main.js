import { pixabayApi } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';
import { imgBoxLight } from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.find-form');
const imagePlace = document.querySelector('.galleriesBox');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  imagePlace.innerHTML = '';

  const formData = new FormData(form);
  const findText = formData.get('find-text');
  if (findText === '') {
    return;
  }
  imagePlace.innerHTML = `<div class="loader"></div>`;
  pixabayApi(findText)
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

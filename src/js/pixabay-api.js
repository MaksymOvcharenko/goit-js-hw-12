import axios from 'axios';

export async function pixabayApi(findText, page) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '44040015-64d065a912d04f3627622b428',
    q: findText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  try {
    const BASE_URL = 'https://pixabay.com/api/';

    const params = new URLSearchParams({
      key: '44040015-64d065a912d04f3627622b428',
      q: 'car',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: page,
    });

    const url = `${BASE_URL}?${params}`;

    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Error',
    });
  }
}

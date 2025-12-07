import axios from 'axios';

const API_KEY = '53393760-f5a058fb9e0a87143d2aaec84';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error;
  }
}

import axios from "axios";

const API_KEY = "53393760-f5a058fb9e0a87143d2aaec84";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: PER_PAGE,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

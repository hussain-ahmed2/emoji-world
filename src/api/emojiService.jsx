import axios from "axios";

const API_KEY = "f88f8e3ab892778af3540664d810e38d09e1ad7a";
const BASE_URL = "https://emoji-api.com/emojis";

export const fetchEmojis = async (searchQuery) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        search: searchQuery,
        access_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching emojis:", error);
    return [];
  }
};

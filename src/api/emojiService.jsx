import axios from "axios";

const API_KEY = import.meta.env.API_KEY;
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

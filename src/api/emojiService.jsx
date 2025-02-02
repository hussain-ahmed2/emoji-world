import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchEmojis = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        search: '',
        access_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching emojis:", error);
    return [];
  }
};

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "4fedb1f0b5cbd3d9a039f18bf658d02d";

export const api = {
  getPopularMovies: async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  },
};
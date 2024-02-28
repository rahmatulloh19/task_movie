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
  getTopRatedMovies: async () => {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  },
  getUpcomingMovies: async () => {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  },
  getSingleMovie: async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  },
  getSingleMovieRecommendation: async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  },
  getSingleMovieActors: async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response;
  },
};

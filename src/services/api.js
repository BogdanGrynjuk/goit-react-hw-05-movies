import axios from 'axios';

const API_KEY = "b39cd0aa2d0aa8fddb8a89d5bb3e6717";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const fetchMoviesInTrend = async () => {
  try {
    const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    const movies = response.data;
    return movies;
  } catch (error) {
    console.error(error);
  }    
};

const fetchMoviesDetails = async (id) => {
  try {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
    const movie = response.data;
    return movie;    
  } catch (error) {
    console.error(error);
  }    
};

const fetchMovieCredits = async (id) => {
  try {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    const credits = response.data;
    return credits;    
  } catch (error) {
    console.error(error);
  }    
};

const fetchMovieReviews = async (id) => {
  try {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    const reviews = response.data;
    return reviews;    
  } catch (error) {
    console.error(error);
  }    
};

const fetchMovies = async (searchQuery) => {
  try {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
    const movies = response.data;
    return movies;    
  } catch (error) {
    console.error(error);
  }    
};

const api = {
  fetchMoviesInTrend,
  fetchMoviesDetails,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchMovies
};

export default api;
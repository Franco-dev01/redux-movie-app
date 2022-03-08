import { createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { api_key } from "../../common/apis/movieApiKey";

const initialState = {
  loading: false,
  hasError: false,
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    getMovies(state) {
      state.loading = true;
    },
    getDetail: (state, { action }) => {
      state.loading = true;
    },
    getMoviesSuccess: (state, { payload }) => {
      state.movies = payload;
      state.loading = false;
    },
    getError(state, action) {
      state.hasError = action.payload;
      state.loading = true;
    },
  },
});

export const moviesSelector = (state) => state;

export default movieSlice.reducer;

export const { addMovies, getDetail, getMovies, getMoviesSuccess, getError } =
  movieSlice.actions;

export const featMovies = (params) => {
  return async (dispatch) => {
    dispatch(getMovies());
    try {
      const featchMovies = await movieApi.get(`movie/popular`, {
        params: { api_key: api_key, page: 1, limit: 20 },
      });
      const data = await featchMovies?.data?.results;
      dispatch(getMoviesSuccess(data));
    } catch (error) {
      dispatch(getError(error));
    }
  };
};

export const fetchMovieDetail = (params) => {
  return async (dispatch) => {
    dispatch(getDetail());
    try {
      const featchMovieDetail = await movieApi.get(`movie/${params?.movieId}`, {
        params: { api_key: api_key },
      });
      const data = await featchMovieDetail?.data;
      dispatch(getMoviesSuccess(data));
    } catch (error) {
      dispatch(getError(error));
    }
  };
};

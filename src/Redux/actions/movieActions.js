import {
  SET_TOP_RATED,
  SET_NOW_PLAYING,
  SET_UPCOMING
} from "../types/movieTypes";

import Axios from "axios";

export const setTopRated = movies => ({
  type: SET_TOP_RATED,
  payload: movies
});

export const setNowPlaying = movies => ({
  type: SET_NOW_PLAYING,
  payload: movies
});

export const setUpcoming = movies => ({
  type: SET_UPCOMING,
  payload: movies
});

export const fetchTopRated = () => async dispatch => {
  const res = await Axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=fed0dc08aa09927ccddbc99c1f16e6c8"
  );
  dispatch(setTopRated(res.data.results));
};

export const fetchNowPlaying = () => async dispatch => {
  const res = await Axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=fed0dc08aa09927ccddbc99c1f16e6c8"
  );
  dispatch(setNowPlaying(res.data.results));
};

export const fetchUpcoming = () => async dispatch => {
  const res = await Axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=fed0dc08aa09927ccddbc99c1f16e6c8"
  );
  dispatch(setUpcoming(res.data.results));
};

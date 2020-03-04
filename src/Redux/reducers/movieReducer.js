import {
  SET_NOW_PLAYING,
  SET_TOP_RATED,
  SET_UPCOMING
} from "../types/movieTypes";

const initState = {
  top_rated: null,
  upcoming: null,
  now_playing: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_NOW_PLAYING:
      return { ...state, now_playing: action.payload };
    case SET_TOP_RATED:
      return { ...state, top_rated: action.payload };
    case SET_UPCOMING:
      return { ...state, upcoming: action.payload };
    default:
      return state;
  }
};

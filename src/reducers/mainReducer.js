import { FETCH_EPISODES, FETCH_CHARACTERS } from "../actions/types";

const initialState = {
  episodes: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      console.log(action);
      return {
        ...state,
        episodes: action.payload,
      };
    case FETCH_CHARACTERS:
      console.log(action);

      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
};

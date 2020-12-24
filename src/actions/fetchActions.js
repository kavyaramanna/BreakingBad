import axios from "axios";
import { CHARACTERS_API, EPISODES_API } from "../config/remoteUrls";
import { FETCH_EPISODES, FETCH_CHARACTERS } from "./types";
import { getErrors } from "./errorActions";

export const fetchEpisodes = () => (dispatch) => {
  axios
    .get(EPISODES_API)
    .then((res) => {
      {
        console.log(res);
      }
      dispatch({
        type: FETCH_EPISODES,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(getErrors(err.message)));
};
export const fetchCharacters = () => (dispatch) => {
  axios
    .get(CHARACTERS_API)
    .then((res) => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(err.message));
};

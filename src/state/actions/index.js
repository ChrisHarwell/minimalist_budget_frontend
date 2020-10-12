import axios from "axios";

export const FETCH_BUDGET_START = "FETCH_START";  // change this to your action
export const FETCH_BUDGET_SUCCESS = "FETCH_SUCCESS";  // change this to your action
export const FETCH_BUDGET_FAILURE = "FETCH_FAILURE";  // change this to your action

export const getBudget= () => dispatch => {
  // the dispatch function is the thunk
  dispatch({ type: FETCH_BUDGET_START });  // change this to your action
  axios
    .get("")
    .then(res => {
      /* whatever you want to do with the response */
      dispatch({ type: FETCH_BUDGET_SUCCESS,  // change this to your action
        payload: res.data }); // add the rest of the payload after res.data like res.data.results
    })
    .catch(err => {
      /* whatever ypu wamt to do with the error */
      dispatch({ type: FETCH_BUDGET_FAILURE,  // change this to your action
         payload: err.response.message }); // add the rest of the payload after err.response like err.response.data
    });
};
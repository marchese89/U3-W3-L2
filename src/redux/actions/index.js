export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addFavouriteAction = (company) => {
  return {
    type: ADD_FAVOURITE,
    payload: company,
  };
};

export const removeFromFavouritesAction = (company) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: company,
  };
};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

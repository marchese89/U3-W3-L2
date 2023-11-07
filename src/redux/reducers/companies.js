import { GET_COMPANIES } from "../actions";

const initialState = {
  content: [],
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default companiesReducer;

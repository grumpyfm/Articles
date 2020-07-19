import * as actionTypes from './actions';
import { initialState } from './initiaState';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_ARTICLES:
      return Object.assign({}, state, {
        articles: action.articles,
      });
    default:
      return state;
  }
};

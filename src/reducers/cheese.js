import * as actions from '../actions/cheese'

const initialState = {
  cheeses: [],
  loading: false,
  error: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case actions.FETCH_CHEESES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
     break;
    case actions.FETCH_CHEESES_SUCCESS:
      return Object.assign({}, state, {
        cheeses: action.cheeses,
        loading: false,
        error: null
      })
      break;
    case actions.FETCH_CHEESES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })
      break;      
    default:
      return state
  }
}
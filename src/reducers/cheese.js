import * as actions from '../actions/cheese';

const initialState = {
	cheeses: [],
	loading: false,
	error: null
};

export const reducer = (state=initialState, action) => {
	switch(action.type) {
	case '':
		return {};
	case actions.FETCH_CHEESES_REQUEST:
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	case actions.FETCH_CHEESES_SUCCESS:
		return Object.assign({}, state, {
			cheeses: action.cheeses,
			loading: false,
			error: null
		});
	case actions.FETCH_CHEESES_ERROR:
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		});
	case action.ADD_CHEESES_SUCCESS:
		return Object.assign({}, state, {
			loading: false,
			cheeses: [...state.cheeses, action.cheese]
		});
	default:
		return state;
	}
};
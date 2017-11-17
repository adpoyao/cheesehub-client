import {REACT_APP_API_BASE_URL} from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
	type: FETCH_CHEESES_SUCCESS,
	cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
	type: FETCH_CHEESES_ERROR,
	error
});

export const FETCH_CHEESES = 'FETCH_CHEESES';
export const fetchCheeses = () => dispatch => {
	dispatch(fetchCheesesRequest());
	return fetch(`${REACT_APP_API_BASE_URL}/cheeses`).then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then(
		cheeses => {
			dispatch(fetchCheesesSuccess(cheeses));
		}).catch(error => dispatch(fetchCheesesError(error)));
};

export const ADD_CHEESE = 'ADD_CHEESE';
export const addCheese = (cheese) => dispatch => {
	dispatch(fetchCheesesRequest());
	return fetch(`${REACT_APP_API_BASE_URL}/cheeses`, 
		{
			method: 'POST', 
			headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
			body: JSON.stringify(cheese)
		})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			console.log(res.json);
			return res.json();
		}).then(
			cheese => {
				dispatch(addCheeseSuccess(cheese));
			}
		).then(
			() => {
				dispatch(fetchCheeses());
				console.log('We got here.');
			}
		)
		.catch(error => dispatch(fetchCheesesError(error)));
};

export const ADD_CHEESE_SUCCESS = 'ADD_CHEESE_SUCCESS';
export const addCheeseSuccess = (cheese) => ({
	type: ADD_CHEESE_SUCCESS,
	cheese
});
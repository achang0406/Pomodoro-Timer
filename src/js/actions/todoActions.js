import * as types from './actionTypes';

export function addItem (item) {
	return dispatch => {
		dispatch({ type: types.ADD_TODO_ITEM, item });
	};
}

export function removeItem (index) {
	return dispatch => {
		dispatch({ type: types.REMOVE_TODO_ITEM, index });
	}
}
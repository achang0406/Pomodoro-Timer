import initialstate from '../configs/initialstate';
import * as types from '../actions/actionTypes';

export default function todoReducer (state = initialstate.todos, action) {
	switch (action.type) {
		case types.ADD_TODO_ITEM:
			return [...state, action.item];
		case types.REMOVE_TODO_ITEM:
			const newState = [...state];
			newState.splice(action.index, 1);
			return newState;
		default:
			return state;
	}
}
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../../src/js/actions/todoActions';
import * as types from '../../src/js/actions/actionTypes';
import { expect } from 'chai';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('todoActions', () => {
  it('should create an action to add a todo', () => {
  	const store = mockStore({ todos: [] });
    const item = 'test';
    const expectedAction = {
      type: types.ADD_TODO_ITEM,
      item
    }
    store.dispatch(actions.addItem(item));
	expect(store.getActions()[0]).to.deep.equal(expectedAction);
  })
})
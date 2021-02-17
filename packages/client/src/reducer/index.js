import ACTION_TYPES from '../actions/types';

const initialState = {
  users: [],
  error: null,
};

function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_USER_REQUEST:
    case ACTION_TYPES.DELETE_USER_REQUEST:
    case ACTION_TYPES.GET_ALL_USERS_REQUEST: {
      return {
        ...state,
      };
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const {
        payload: { values },
      } = action;
      const { users } = state;
      return {
        ...state,
        users: [...users, values],
      };
    }
    case ACTION_TYPES.DELETE_USER_SUCCESS: {
      const {
        payload: { id },
      } = action;
      const { users } = state;
      let index = users.map((user) => user.id === id).indexOf(true);
      users.splice(index, 1);
      return {
        ...state,
        users: [...users],
      };
    }
    case ACTION_TYPES.CREATE_USER_ERROR:
    case ACTION_TYPES.GET_ALL_USERS_ERROR:
    case ACTION_TYPES.DELETE_USER_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        error: error,
      };
    }

    case ACTION_TYPES.GET_ALL_USERS_SUCCESS: {
      const {
        payload: { values },
      } = action;
      return {
        ...state,
        users: [...values],
      };
    }

    default:
      return state;
  }
}
export default reducer;

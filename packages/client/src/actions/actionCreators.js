import ACTION_TYPES from './types';

//CREATE
export const createUser = (values) => {
  console.log('create action', values);
  return {
    type: ACTION_TYPES.CREATE_USER,
    payload: { values },
  };
};

export const createUserRequest = () => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
});

export const createUserSuccess = (values) => {
  return {
    type: ACTION_TYPES.CREATE_USER_SUCCESS,
    payload: { values },
  };
};

export const createUserError = (err) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  payload: { error: err },
});

//GET ALL
export const getAllUsers = () => ({
  type: ACTION_TYPES.GET_ALL_USERS,
});

export const getAllUsersRequest = () => ({
  type: ACTION_TYPES.GET_ALL_USERS_REQUEST,
});

export const getAllUsersSuccess = (values) => {
  return {
    type: ACTION_TYPES.GET_ALL_USERS_SUCCESS,
    payload: { values },
  };
};
export const getAllUsersError = (err) => ({
  type: ACTION_TYPES.GET_ALL_USERS_ERROR,
  payload: { error: err },
});

//DELETE
export const deleteUser = (id) => ({
  type: ACTION_TYPES.DELETE_USER,
  payload: { id },
});

export const deleteUserRequest = () => ({
  type: ACTION_TYPES.DELETE_USER_REQUEST,
});

export const deleteUserSuccess = (id) => ({
  type: ACTION_TYPES.DELETE_USER_SUCCESS,
  payload: { id },
});

export const deleteUserError = (err) => ({
  type: ACTION_TYPES.DELETE_USER_ERROR,
  payload: { error: err },
});

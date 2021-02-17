import { put } from 'redux-saga/effects';
import * as api from '../api';
import * as actionCreators from '../actions/actionCreators';

export function* getUsersSaga() {
  yield put(actionCreators.getAllUsersRequest());
  try {
    const {
      data: { data },
    } = yield api.getUsers();
    yield put(actionCreators.getAllUsersSuccess(data));
  } catch (err) {
    yield put(actionCreators.getAllUsersError(err));
  }
}

export function* createUserSaga({ payload: { values } }) {
  yield put(actionCreators.createUserRequest());
  try {
    const {
      data: { data },
    } = yield api.createUser(values);
    yield put(actionCreators.createUserSuccess(data));
  } catch (err) {
    yield put(actionCreators.createUserError(err));
  }
}

export function* deleteUserSaga({ payload: { id } }) {
  yield put(actionCreators.deleteUserRequest());
  try {
    yield api.deleteUserById(id);
    yield put(actionCreators.deleteUserSuccess(id));
  } catch (err) {
    yield put(actionCreators.deleteUserError(err));
  }
}

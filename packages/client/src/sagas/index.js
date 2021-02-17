import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import * as UserSagas from './userSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER, UserSagas.createUserSaga);
  yield takeLatest(ACTION_TYPES.GET_ALL_USERS, UserSagas.getUsersSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER, UserSagas.deleteUserSaga);
}

export default rootSaga;

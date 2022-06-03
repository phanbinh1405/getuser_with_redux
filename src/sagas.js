import { call, put, takeEvery, take, fork } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";

function userFetch() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

function* workGetUsersFetch() {
  const user = yield call(userFetch)
  // Sau khi user co du lieu moi truyen action vao store
  yield put({type: GET_USERS_SUCCESS, user})
}

function* watchGetUsersFetch() {
  while (true) {
     yield take(GET_USERS_FETCH);
    // Khi nao action get_uers_fetch chay xong moi alert
    // const user = yield call(userFetch);
    // console.log(action);
    // yield put({ type: GET_USERS_SUCCESS, user });
    yield fork(workGetUsersFetch)
  }
}

function* mySaga() {
  // yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
  yield fork(watchGetUsersFetch);
}

export default mySaga;

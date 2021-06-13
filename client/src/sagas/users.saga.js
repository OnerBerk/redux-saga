import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users.actions'
import * as api from '../api/users'


function* getUsers() {
    try {
        const result = yield call(api.gestUsers); // call va permettre de gerer les promesse sans callback
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))

    } catch (e) {
        yield put(actions.userError({
            error: 'an error occured when get users' + e
        }))
    }
}

function* createUser(action) {
    try {
        console.log(action)
        yield call(api.createUser, {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName
        });
        yield call(getUsers);
    } catch (e) {
        yield put(actions.userError({
            error: 'an error occured when created user' + e
        }))
    }
}

function* deleteUser({userId}) {
    try {
        yield call(api.deleteUser, userId)
        yield call(getUsers);
    } catch (e) {
        yield put(actions.userError({
            error: 'an error occured when deleted' + e
        }))
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);//takeEcery est une boucle while(true)
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USERS_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
    while (true) {
        const action = yield take(actions.Types.DELETE_USERS_REQUEST);
        yield call(deleteUser, {
            userId: action.payload.userId
        })

    }
}

const usersSagas = [
    // fork va permettre de surveiller chaque action appeler dans le takeevery dans des process separer
    //exemple il creeras un fork1 por getusers , fork 2 pour deleteUsers ect....
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
];

export default usersSagas
import {takeEvery, call,fork,put} from 'redux-saga/effects';
import * as actions from '../actions/users.actions'
import * as api from '../api/users'


function* getUsers() {
    try {
        const result = yield call(api.gestUsers); // call va permettre de gerer les promesse sans callback
        console.log(result)
        yield put(actions.getUsersSuccess({
            items:result.data.data
        }))

    } catch (e) {
        console.log(e)
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);//takeEcery est une boucle while(true)
}
const usersSagas=[
    // fork va permettre de surveiller chaque action appeler dans le takeevery dans des process separer
    //exemple il creeras un fork1 por getusers , fork 2 pour deleteUsers ect....
    fork(watchGetUsersRequest)
];

export default usersSagas
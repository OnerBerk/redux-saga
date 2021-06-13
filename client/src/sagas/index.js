import usersSagas from "./users.saga";
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([
        //all va permet de greer tous les process fork en paralleles et gerer toues les promesses to be resolve
        ...usersSagas
    ])
}

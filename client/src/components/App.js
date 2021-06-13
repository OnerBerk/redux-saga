import {useEffect} from "react";
import './App.css';
//import Yield from "./yieldExample/yield";
import {connect, useSelector} from "react-redux";
import {getUsersRequest, createUsersRequest, deleteUsersRequest} from "../actions/users.actions";
import UserList from "./userList";
import NewUser from "./newUser";

const App = ({getUsersRequest, createUsersRequest,deleteUsersRequest}) => {
    const userslist = useSelector(state => state.users.items)

    //console.log(Yield())
    useEffect(() => {
        getUsersRequest()
    }, [])

    const handlSubmit = ({firstName, lastName}) => {
        createUsersRequest({
            firstName,
            lastName
        })
    }
    const handledleteUser=(userId)=>{
        deleteUsersRequest(userId)
    }

    return (
        <div className="App">
            <NewUser onSubmit={handlSubmit}/>
            <UserList users={userslist} onDeleteUser={handledleteUser}/>
        </div>
    );
}
export default connect(null, {
    getUsersRequest, createUsersRequest,deleteUsersRequest
})(App);
import {useEffect} from "react";
import './App.css';
import Yield from "./yieldExample/yield";
import {connect, useSelector} from "react-redux";
import {getUsersRequest} from "../actions/users.actions";
import UserList from "./userList";

const App = ({getUsersRequest}) => {
    const userslist = useSelector(state => state.users.items)

    //console.log(Yield())
    useEffect(() => {
        getUsersRequest()
    }, [])


    return (
        <div className="App">
            <UserList users={userslist}/>
        </div>
    );
}
export default connect(null, {
    getUsersRequest
})(App);
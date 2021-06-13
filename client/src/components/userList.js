import React from "react";
import {ListGroup, ListGroupItem,Button} from 'reactstrap'

const UserList = ({users}) => {
    return (
        <ListGroup>
            {users.map(el => {
                return <ListGroupItem key={el.id}>
                    <section style={{display:"flex"}}>
                        <div style={{flexGrow:1}}>
                            {el.firstName}{' '} {el.lastName}
                        </div>
                        <Button outline color="danger"> delete </Button>
                    </section>
                </ListGroupItem>
            })}
        </ListGroup>
    )
}

export default UserList
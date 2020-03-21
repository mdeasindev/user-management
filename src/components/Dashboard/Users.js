import React from 'react';
import SingleUser from './SingleUser';

const Users = props => {
    return (
        <React.Fragment>{props.users ? props.users.map((user) => <SingleUser addUser={props.addUser} key={user.id} user={user} />) : ''}</React.Fragment>
    )
}

export default Users;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const UserCount = ({addedUser}) => {
    return (
        <div className="user-count text-right">
            <FontAwesomeIcon icon={faUser} />
            <span className="count ml-2"><strong>{addedUser.length}</strong></span>
        </div>
    )
}

export default UserCount;
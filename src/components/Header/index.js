import React from 'react';
import Filter from './Filter';
import UserCount from './UserCount';

const Header = ({addedUser, filterBy}) => {
    return (
        <header className="pt-5 pb-5">
            <div className="row">
                <div className="col-sm-6">
                    <Filter filterBy={filterBy} />
                </div>

                <div className="col-sm-6">
                    <UserCount addedUser={addedUser} />
                </div>
            </div>
        </header>
    )
}

export default Header;
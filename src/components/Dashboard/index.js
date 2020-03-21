import React from 'react';
import Users from './Users';
import TotalIncome from './TotalIncome';

const Dashboard = props => {
    const { users, addUser, addedUser } = props;
    return (
        <div className="row">
            <div className="col-sm-8">
                <Users users={users} addUser={addUser} />
            </div>
            <div className="col-sm-4">
                <TotalIncome addedUser={addedUser} />
            </div>
        </div>
    )
}

export default Dashboard;
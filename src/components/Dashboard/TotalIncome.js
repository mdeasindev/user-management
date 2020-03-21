import React from 'react';

const TotalIncome = ({addedUser}) => {
    return (
        <div className="alert alert-primary" role="alert">
            Total Yearly Income: <strong>${addedUser.reduce((total, item) => total + item.yearlyIncome, 0)}</strong>
        </div>
    )
}

export default TotalIncome;
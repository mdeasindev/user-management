import React from 'react';

const Filter = ({filterBy}) => {
    const handleFilter = (e) => {
        filterBy(e.target.value)
    }
    return (
        <div className="fillter-user">
            <h3>Filter By:</h3>
            <select className="custom-select" onChange={handleFilter}>
                <option defaultValue="ascending" value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                <option value="yearly-income">Yearly Income</option>
            </select>
        </div>
    )
}

export default Filter;
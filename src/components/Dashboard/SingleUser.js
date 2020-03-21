import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SingleUser = ({user, addUser}) => {
    const [singleUser, setSingleUser] = useState({
        text: "Add"
    })
    const { name, email, yearlyIncome, phone, image, id } = user;

    const handleAddUser = (e) => {
        e.preventDefault();
        addUser(id);
        setSingleUser({
            ...singleUser,
            text: "Added"
        });
        setTimeout(() => {
            setSingleUser({
                ...singleUser,
                text: "Add"
            });
        }, 400)
    }

    return (
        <div className="single-user mb-4">
            <div className="card">
                
                <div className="card-body">
                    <div className="card-thumb">
                        {image ? <img src={image} alt="Thumb" /> : ''}
                    </div>
                    <div className="card-dsc">
                        {name ? <h5 className="card-title">{user.name}</h5> : ''}
                        <ul className="list-group list-group-flush">
                            {email ? <li className="list-group-item">Email: <strong>{email}</strong></li> : ''}
                            {phone ? <li className="list-group-item">Phone: <strong>{phone}</strong></li> : ''}
                            {yearlyIncome ? <li className="list-group-item">Yearly Income: <strong>${yearlyIncome}</strong></li> : ''}
                        </ul>
                        <a href="htts://mdeasin.com" onClick={handleAddUser} className="btn btn-primary mt-3"><FontAwesomeIcon icon={faPlus} /><span className="ml-2">{singleUser.text}</span></a>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default SingleUser;
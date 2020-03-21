import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import { FakeData } from './FakeData';

function App() {
  const [users, setUsers] = useState([]);
  const [addedUser, setAddedUser] = useState([]);

  useEffect(() => {
    setUsers(FakeData);
  }, []);

  // add use
  const addUser = (id) => {
    let filterUser = users.filter(user => user.id === id);

    setAddedUser([
      ...addedUser,
      ...filterUser
    ]);
  }

  // filter by
  const filterBy = value => {
    const defaultUser = [...FakeData];
    if(value === 'descending'){
      setUsers(defaultUser.reverse());
    } else if(value === 'yearly-income'){
      setUsers(defaultUser.sort((a,b) => b.yearlyIncome - a.yearlyIncome));
    } else {
      setUsers(defaultUser);
    }
  }

  return (
    <div className="container">
      <Header addedUser={addedUser} filterBy={filterBy} />
      <Dashboard users={users} addUser={addUser} addedUser={addedUser} />
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import User from './component/User/User';
import Friends from './component/Friends/Friends'

function App() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  
  function addSalary(data){
    data.results.map(user=>user.salary=getRandomInt(100000,500000));
    setUsers(data.results);
  }

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15&inc=name,gender,nat,picture&noinfo')
    .then(res=>res.json())
    .then(data=>addSalary(data))
  },[])


  const [friends,setFriends]=useState([]);
  function friendsInfo(friend){
    console.log('button clicked');
    const newFriends=[...friends,friend];
    setFriends(newFriends);
  }
  console.log(friends);
  console.log(users);

  return (
    <div className="App">
      <h1 id="heading">Imagine Your Facebook Friends Page</h1>
      <div id='main'>
        <div className="user">
          {users.map(user=><User addBtn={friendsInfo} user={user}></User>)}
        </div>
        <div className="friends">
          <Friends friends={friends}></Friends>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const User = (props) => {
     const {salary,gender,nat}=props.user;
     const {large}=props.user.picture;
     const {title,first,last}=props.user.name;
     
    console.log(props.user)
    return (
        <div id="wrapper">
           <div id="img-wrapper">
              <img src={large} alt=""/>
           </div>
           <div id="person-info">
                <h2> Name: {first}</h2>
                <h3> Gender: {gender}</h3>
                <h3> Nationality: {nat} </h3>
                <h3>Salary: ${salary}</h3>
                <button onClick={()=>props.addBtn(props.user)}><FontAwesomeIcon icon={faUserPlus} /> add to friend</button>
           </div>
        </div>
    );
};

export default User;
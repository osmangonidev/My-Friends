import React from 'react';

const Friends = (props) => {
    const friends=props.friends;
    const friendsSalary=friends.reduce((totalSalary,friend)=>totalSalary+ parseFloat(friend.salary),0);
    console.log(friends);
    return (
        <div id="friend-info-wrapper">
            <h1>My friends info</h1>
            <h3>Total Friends:{friends.length}</h3>
            <h3>Friends Annual Income: {friendsSalary}</h3>

        </div>
    );
};

export default Friends;
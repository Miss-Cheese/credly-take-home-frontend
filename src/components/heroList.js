import React from 'react';

function HeroList(props) {

    const handleClick = (user) => {
        props.issueBadge(user)
    }

    return (
        <div className='hero-list'>
            {props.users.map((user) => (
                <div key={user.id} className='hero-card'>
                    <p>{user.name}</p>
                    <p>{user.occupation}</p>
                    <img alt="hero" src={user.image_url}/>
                    <button onClick={() => handleClick(user)}>Give a badge!</button>
                </div>
            ))}
        </div>
    )
}

export default HeroList